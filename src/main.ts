import * as core from '@actions/core'
import * as github from '@actions/github'
async function run(): Promise<void> {
  try {
    const context = github.context

    const payLoad = {
      repository_name: context.repo.repo,
      repository_owner: context.repo.owner,
      branch: context.ref
    }
    
    const payLoadStr = JSON.stringify(payLoad)
    core.debug(payLoadStr)
    
    const url = core.getInput("PLF_END_POINT_URL");
    core.debug(url)

    core.setOutput('call_payload', payLoadStr)
  } 
  catch (error) {
    core.setFailed(error.message)
  }
}

run()
