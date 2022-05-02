# MoonBaby Labs Site Skeleton


### Development
1.  **Local Environment Variables.**
    - GATSBY_STORYBLOK : Get from storyblok api

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!


 ### Infrastructure Setup

1.  Get your required environment variables.
    - GATSBY_STORYBLOK : Get API prod token
    - ACCESS_TOKEN : The Github Personal Access token
    - DOMAIN : Set the domain that you would like to attach
    - GITHUB_REPO : The github repo that you would like to use.
    - GATSBY_GA_ID: The Google Analytics ID
    - SITE_NAME: Whatever you want the name of the site to be. Used only for AWS amplify console.


2.  Put in your environment variables through aws CLI:
    Update content wrapped in <<<>>> tags with expected content.

    ```aws secretsmanager create-secret --name GATSBY_STORYBLOK --secret-string <<<VALUE>>> --region <<<REGION>>>```
    ```aws secretsmanager create-secret --name ACCESS_TOKEN --secret-string <<VALUE>>> --region <<<REGION>>>```
    ```aws ssm put-parameter --name DOMAIN --value <<<EXAMPLE_DOMAIN>>> --type String --region <<<REGION>>>```
    ```aws ssm put-parameter --name GITHUB_REPO --value <<<GITHUB_REPO>>> --type String --region <<<REGIION>>>```
    ```aws ssm put-parameter --name GATSBY_GA_ID --value <<<GA_ID>>> --type String --region <<<REGION>>>```
    ```aws ssm put-parameter --name SITE_NAME --value <<<GA_ID>>> --type String --region <<<REGION>>>```

3.  Run the AWS CloudFormation Stack
    Update content wrapped in <<<>>> tags with expected content.

    ```
    aws cloudformation deploy \
      --template-file ./.infrastructure/cloudformation.yml \
      --capabilities CAPABILITY_IAM \
      --stack-name <<<STACK_NAME>>> \
      --region <<<REGION>>>
    ```