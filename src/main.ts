import * as core from '@actions/core'
import * as github from '@actions/github'
async function run(): Promise<void> {
  try {
    const context = github.context
    const contextAsString = JSON.stringify(context)
    core.debug(contextAsString)
    const whoToGreet: string = core.getInput('who-to-greet')
    core.debug(`hello ${whoToGreet}`)

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
