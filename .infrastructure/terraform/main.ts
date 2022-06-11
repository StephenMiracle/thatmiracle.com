import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from './.gen/providers/aws';
import { S3Bucket, S3BucketObject } from './.gen/providers/aws/s3';
import { CloudfrontDistribution, CloudfrontOriginAccessIdentity } from './.gen/providers/aws/cloudfront';
import { Route53Record } from "./.gen/providers/aws/route53";
import { AcmCertificate } from "./.gen/providers/aws/acm";
import * as path from 'path';
import * as glob from 'glob';
import { TerraformOutput } from 'cdktf';
import * as mime from 'mime-types';
require('dotenv').config({ path: '../../.env' })
const site = require ('../../site.js')

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    
    // assign AWS region
    new AwsProvider(this, 'aws', {
      region: site.region
    });
    // define resources here
    // Define AWS S3 bucket name
    const BUCKET_NAME = site.domain;
    const originId = `S3-${BUCKET_NAME}`;



    const cloudfrontOriginAccessIdentity = new CloudfrontOriginAccessIdentity(this, 'aws_cloudfront_origin_access_identity', {
      comment: BUCKET_NAME,
    })



    const bucket = this.buckets(BUCKET_NAME, cloudfrontOriginAccessIdentity.id)
    this.files(bucket, BUCKET_NAME)
    const cert = this.cert(BUCKET_NAME)
    const cdn = this.cdn(BUCKET_NAME, originId, cloudfrontOriginAccessIdentity.cloudfrontAccessIdentityPath, bucket, cert)
    this.route(cert, BUCKET_NAME, cdn, site.zoneId)
  }




  files(bucket: S3Bucket, bucketName: string): void {
    const files = glob.sync('../../app/public/**/*', { absolute: false, nodir: true });
    let i = 0;


    // Create bucket object for each file
    for (const file of files) {
      new S3BucketObject(this, `aws_s3_bucket_object_${path.basename(file)}-${i}`, {
        dependsOn: [bucket],            // Wait untill the bucket is not created
        key: file.replace(`../../app/public/`, ''),       // Using relative path for folder structure on S3
        bucket: bucketName,
        source: path.resolve(file),          // Using absolute path to upload
        acl: 'public-read',
        etag: `${Date.now()}`,
        contentType: mime.contentType(path.extname(file)) || undefined       // Set the content-type for each object    
      });
      i++
    }
  }



  cert(domain: string): AcmCertificate {
    return new AcmCertificate(this, "cert", {
      domainName: domain,
      validationMethod: "DNS",
      lifecycle: {
        createBeforeDestroy: true,
      },
    });
  }



  route(cert: AcmCertificate, domain: string, cdn: CloudfrontDistribution, zoneId: string): Route53Record {
    return  new Route53Record(this, "dns-record", {
      allowOverwrite: true,
      dependsOn: [cert],
      name: domain,
      type: "A",
      zoneId: zoneId,
      alias: [{
        name: cdn.domainName,
        zoneId: cdn.hostedZoneId,
        evaluateTargetHealth: false
      }]
    });
  }

  cdn(bucketName: string, originId: string, identityPath: string, bucket: S3Bucket, cert: AcmCertificate): CloudfrontDistribution {

    const cloudFrontDistribution = new CloudfrontDistribution(this, `aws_cloudfront_${bucketName}`, {
      enabled: true,
      dependsOn: [bucket, cert],
      defaultRootObject: 'index.html',
      aliases: [bucketName],
      customErrorResponse: [{
        errorCode: 404,
        responseCode: 200,
        responsePagePath: '/index.html'
      }],
      origin: [{
        originId: originId,
        domainName: bucket.bucketDomainName,
        s3OriginConfig: {
          originAccessIdentity: identityPath
        }
      }],
      defaultCacheBehavior: {
        allowedMethods: ['HEAD', 'DELETE', 'POST', 'GET', 'OPTIONS','PUT', 'PATCH'],
        cachedMethods: ['GET', 'HEAD'],
        viewerProtocolPolicy: "redirect-to-https",
          minTtl: 0,
          defaultTtl: 0,
          maxTtl: 0,
        forwardedValues: {
          cookies: { forward: 'none' },
          queryString: true
        },
        targetOriginId: originId
      },
      restrictions: {
        geoRestriction: {
          restrictionType: 'none'
        }
      },
      viewerCertificate: {
        acmCertificateArn: cert.arn,
        sslSupportMethod: "sni-only"
      },
    });


    // Output the cloudfront url to access the website
    new TerraformOutput(this, 'cloudfront_website_endpoint', {
      description: 'CloudFront URL',
      value: `https://${cloudFrontDistribution.domainName}`
    });

    return cloudFrontDistribution;
  }



  buckets(bucketName: string, id: string): S3Bucket {
    // Create bucket with public access
    const bucket = new S3Bucket(this, 'aws_s3_bucket', {
      acl: 'public-read',
      website: {
        indexDocument: 'index.html',
        errorDocument: 'index.html',
      },
      tags: {
        'Terraform': "true",
        "Environment": "dev"
      },
      bucket: bucketName,
      policy: `{
        "Version": "2012-10-17",
        "Statement": [
          {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": {
              "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${id}"
            },
            "Action": [
              "s3:GetObject"
            ],
            "Resource": [
              "arn:aws:s3:::${bucketName}/*"
            ]
          }
        ]
      }`,
    });


    return bucket;
  }
}


const app = new App();
new MyStack(app, "thatmiracle-com-dev");
app.synth();
