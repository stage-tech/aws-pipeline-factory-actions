import fs from 'fs'
import * as core from '@actions/core'

export const SettingsReader = {
  async loadSettingsFile() {
    const settingsFilePath: fs.PathLike = './pipeline-factory.settings'
    const settingsFileExists = fs.existsSync(settingsFilePath)
    if (settingsFileExists) {
      const fileContents = fs.readFileSync(settingsFilePath)
      const contentAsJson = JSON.parse(fileContents.toString())
      core.debug(`settings file ${JSON.stringify(contentAsJson, null, 4)}`)
      return contentAsJson
    }

    return {}
  }
}
