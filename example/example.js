/* yarn example/ */
import ip from '../src'

(async () => {
  const res = await ip({
    text: 'example',
  })
  console.log(res)
})()