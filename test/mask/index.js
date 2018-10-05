import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import ip from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await ip({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts