import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import ip from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof ip, 'function')
  },
  async 'calls package without error'() {
    await ip()
  },
  // async 'gets a link to the fixture'({ FIXTURE }) {
  //   const res = await ip({
  //     text: FIXTURE,
  //   })
  //   ok(res, FIXTURE)
  // },
}

export default T