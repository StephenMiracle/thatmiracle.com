import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from './.gen/providers/aws';
import { S3Bucket, S3BucketObject } from './.gen/providers/aws/s3';
import { CloudfrontDistribution, CloudfrontOriginAccessIdentity } from './.gen/providers/aws/cloudfront';
import { Route53Record } from "./.gen/providers/aws/route53";
import { AcmCertificate } from "./.gen/providers/aws/acm";
import * as path from 'path';
import * as glob from 'glob';
import * as mime from 'mime-types';
require('dotenv').config({ path: '../../.env' })

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    
    // assign AWS region
    new AwsProvider(this, 'aws', {
      region: process.env.REGION || 'us-east-1'
    });
    // define resources here
    // Define AWS S3 bucket name
    const BUCKET_NAME = process.env.DOMAIN || '';
    const originId = `S3-${BUCKET_NAME}-${Date.now()}`;



    const cloudfrontOriginAccessIdentity = new CloudfrontOriginAccessIdentity(this, 'aws_cloudfront_origin_access_identity', {
      comment: BUCKET_NAME,
    })

    const cert = this.cert(BUCKET_NAME)
    const env = process.env.ENV || ''

    const bucket = this.buckets(BUCKET_NAME, cloudfrontOriginAccessIdentity.id, env);
    this.files(bucket, BUCKET_NAME, env);
    const cdn = this.cdn(BUCKET_NAME, originId, bucket, cert, env);
    this.route(cert, BUCKET_NAME, cdn, process.env.ZONE_ID || '', env, null);

    // WWW route
    const wBucket = new S3Bucket(this, 'aws_redirect_s3_bucket_public', {
      acl: 'public-read',
      dependsOn: [bucket],
      bucket: `www.${BUCKET_NAME}`,
      forceDestroy: true,
      website: {
        redirectAllRequestsTo: BUCKET_NAME
      }
    })

    const wCdn = this.cdn(`www.${BUCKET_NAME}`, originId, wBucket, cert, 'www')
    this.route(cert, `www.${BUCKET_NAME}`, wCdn, process.env.ZONE_ID || '', 'www', wBucket)
  }




  files(bucket: S3Bucket, bucketName: string, env: string): void {
    const files = glob.sync('../../app/public/**/*', { absolute: false, nodir: true });
    let i = 0;


    // Create bucket object for each file
    for (const file of files) {
      new S3BucketObject(this, env + `_aws_s3_bucket_object_${path.basename(file)}-${i}`, {
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
      domainName: `*.${domain}`,
      subjectAlternativeNames: [domain, 'www.' + domain],
      validationMethod: "DNS",
      lifecycle: {
        createBeforeDestroy: true,
      },
    });
  }



  route(cert: AcmCertificate, domain: string, cdn: CloudfrontDistribution | null, zoneId: string, env: string, bucket: S3Bucket | null): Route53Record {
    return  new Route53Record(this, env + "_dns-record", {
      allowOverwrite: true,
      dependsOn: [cert],
      name: domain,
      type: "A",
      zoneId: zoneId,
      alias: [{
        name: cdn ? cdn.domainName : bucket?.bucketDomainName || '',
        zoneId: cdn ? cdn.hostedZoneId : bucket?.hostedZoneId || '',
        evaluateTargetHealth: false
      }]
    });
  }

  cdn(bucketName: string, originId: string, bucket: S3Bucket, cert: AcmCertificate, env: string): CloudfrontDistribution {

    const cloudFrontDistribution = new CloudfrontDistribution(this, env + `_aws_cloudfront_${bucketName}`, {
      enabled: true,
      dependsOn: [bucket, cert],
      aliases: [bucketName],
      defaultRootObject: 'index.html',
      customErrorResponse: [{
        errorCode: 404,
        responseCode: 200,
        responsePagePath: '/index.html'
      }],
      origin: [{
        originId: originId,
        domainName: bucket.bucketDomainName,
        customOriginConfig: {
          originSslProtocols: ['TLSv1.2'],
          originReadTimeout: 30,
          originKeepaliveTimeout: 5,
          httpPort: 80,
          httpsPort: 443,
          originProtocolPolicy: 'http-only'
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

    return cloudFrontDistribution;
  }



  buckets(bucketName: string, id: string, env: string): S3Bucket {
    // Create bucket with public access
    const bucket = new S3Bucket(this, env + '_aws_s3_bucket', {
      acl: 'public-read',
      website: {
        indexDocument: 'index.html',
        errorDocument: 'index.html'
      },
      tags: {
        'Terraform': "true",
        "Environment": env
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
      }`
    });


    return bucket;
  }
}


const app = new App();
new MyStack(app, "thatmiracle-com-dev");
app.synth();
