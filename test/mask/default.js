import { makeTestSuite } from 'zoroaster'
import { HTTPContext } from 'https-context'
import ip from '../../src'

const ts = makeTestSuite('test/result', {
  /**
   * @param {string} _
   * @param {HTTPContext} context
   */
  async getResults(input, { setResponse, url: host }) {
    setResponse(input)
    const res = await ip({
      host,
    })
    return res
  },
  context: HTTPContext,
})

export default ts