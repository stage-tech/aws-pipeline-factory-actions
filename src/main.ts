import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    core.setOutput('time', new Date().toTimeString())
    const whoToGreet: string = core.getInput('who-to-greet')
    core.debug(`hello ${whoToGreet}`)

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
