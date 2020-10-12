import fs from 'fs'
import * as core from '@actions/core'

export const SettingsReader = {
  loadSettingsFile() {
    let contentAsJson = {}
    const settingsFilePath: fs.PathLike = './pipeline-factory.settings'
    const settingsFileExists = fs.existsSync(settingsFilePath)
    if (settingsFileExists) {
      const fileContents = fs.readFileSync(settingsFilePath)
      contentAsJson = JSON.parse(fileContents.toString())
      core.debug(`settings file ${JSON.stringify(contentAsJson, null, 4)}`)
    } else {
      core.debug(`no settings file found @ ${settingsFilePath}`)
    }

    return contentAsJson
  }
}
