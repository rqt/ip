import { HTTPContext } from 'https-context'
import ip from '../src'

/* start example */
const GetIp = async (host) => {
  const res = await ip({ host })
  return res
}
/* end example */

(async () => {
  const c = new HTTPContext()
  await c._init()
  c.setResponse('127.0.0.1')
  try {
    const res = await GetIp(c.url)
    console.log(res)
  } finally {
    await c._destroy()
  }
})()