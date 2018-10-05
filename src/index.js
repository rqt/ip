import rqt from 'rqt'

/**
 * Returns a public IP address of the host.
 */
export default async function ip() {
  const res = await rqt('https://api.ipify.org')
  return res
}