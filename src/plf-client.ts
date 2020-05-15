import axios, {AxiosInstance} from 'axios'
import * as core from '@actions/core'

export default class PipelineFactoryClient {
  private client: AxiosInstance
  constructor() {
    const baseUrl = core.getInput('PLF_END_POINT_URL')
    const apiKey = core.getInput('PLF_API_KEY')

    this.client = axios.create({
      baseURL: baseUrl,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      }
    })
  }

  async createPipeline(payload: object): Promise<any> {
    return this.client
      .post('/branch-created', payload)
      .then(res => {
        core.debug(`client ${JSON.stringify(res)}`)
      })
      .catch(e => {
        core.error(`client ${JSON.stringify(e)}`)
      })
  }
}
