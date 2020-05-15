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
    try {
      const res = await this.client.post('/branch-created', payload)
      core.debug(`client ${JSON.stringify(res)}`)
    } catch (error) {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        core.debug(error.response.data)
        core.debug(error.response.status)
        core.debug(error.response.headers)
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        core.debug(error.request)
      } else {
        // Something happened in setting up the request and triggered an Error
        core.debug(error.message)
      }
      core.debug(error)
    }
  }
}
