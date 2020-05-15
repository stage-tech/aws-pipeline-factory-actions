import * as core from '@actions/core'
import * as github from '@actions/github'
import PipelineFactoryClient from './plf-client'

async function run(): Promise<void> {
  try {
    const context = github.context
    //core.debug(JSON.stringify(context))
    const payLoad = {
      event: context.eventName,
      repository_name: context.repo.repo,
      repository_owner: context.repo.owner,
      branch: context.ref
    }

    const payLoadStr = JSON.stringify(payLoad)
    core.debug(payLoadStr)

    const client = new PipelineFactoryClient()
    client
      .createPipeline(payLoad)
      .then(r => {
        core.debug(JSON.stringify(r))
      })
      .catch(e => {
        core.debug(JSON.stringify(e))
      })

    core.setOutput('call_payload', payLoadStr)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
