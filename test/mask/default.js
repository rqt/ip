import makeTestSuite from '@zoroaster/mask'
import { HTTPContext } from 'https-context'
import ip from '../../src'

const ts = makeTestSuite('test/result', {
  /**
   * @param {HTTPContext} context
   */
  async getResults({ setResponse, url: host }) {
    setResponse(this.input)
    const res = await ip({
      host,
    })
    return res
  },
  context: HTTPContext,
})

export default ts