# AWS Pipeline Factory Trigger

Install this action to your repository to automatically create and delete AWS code pipeline and code build resources when github branches are created and deleted.

## Usage

Create a [AWS Pipeline factory API Gateway token](https://link-to-documentation-later) and save it to your GitHub repository’s **Settings → Secrets**. Then you can configure your Actions workflow .

```workflow
name: AWS Pipeline Factory Triggers
on: 
  delete:
  create:
jobs:
  Synchronize Pipeline Factory: 
    runs-on: ubuntu-latest
    steps:
    - uses: uses: stage-tech/aws-pipeline-factory-actions@releases/v1.12
      with: 
        PLF_END_POINT_URL: "https://pipeline-factory.tools.salt-dev.ws/"
        PLF_API_KEY : ${{ secrets.PLF_API_KEY }}
```

## Configurations

|Input Name |Description
|-|-|
|PLF_END_POINT_URL| The URL of your pipeline factory instance API|
|PLF_API_KEY| A valid pipeline factory API Key. Store in Github Secrets |

