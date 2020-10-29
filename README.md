# AWS Pipeline Factory Trigger

Install this action to your repository to automatically create and delete AWS code pipeline and code build resources when github branches are created and deleted.

## Usage

Create a [AWS Pipeline factory API Gateway token](https://link-to-documentation-later) and save it to your GitHub repository’s **Settings → Secrets**. Then you can configure your Actions workflow .

```workflow
name: AWS Pipeline Factory Triggers
on: 
  delete:
  push:
  create:
jobs:
  Synchronize_Pipeline_Factory: 
    runs-on: ubuntu-latest
    steps:
    - name: 'Checkout source code'
      uses: 'actions/checkout@v2'
      with:
        ref: ${{ github.ref }}
    - uses: stage-tech/aws-pipeline-factory-actions@v1.3
      with: 
        PLF_END_POINT_URL: "https://pipeline-factory.tools.salt-dev.ws/"
        PLF_API_KEY : ${{ secrets.PLF_API_KEY }}
```

## Configurations

|Input Name |Description
|-|-|
|PLF_END_POINT_URL| The URL of your pipeline factory instance API|
|PLF_API_KEY| A valid pipeline factory API Key. Store in Github Secrets |

## Repository Settings File

Add  pipeline-factory.settings file to the root of your repository to override default settings.
- file format is JSON
- This file needs to be in repository root path to be considered.
- File name is case-sensitive.
- file is optional 
- All file keys are optional. 

```json

{
  // name of s3 bucket to store build artifacts
  "artifactsBucketName" : "s3 bucket name" ,

  // iam role to use for , 
  "buildAsRoleArn" : "iam role arn",

  // relative location of build spec file , if omitted default is "buildspec.yml"
  "buildspecFileLocation" : "./scripts/custom_buildspec.yml",

  
  // an array of branch names that should be monitored by Pipeline Factory 
  // "master" branch is default value and is always monitored even if not on the list.
  "monitoredBranches" : [ "feature-1" , "bugfix-12" , "test" , "demo"],

}

```