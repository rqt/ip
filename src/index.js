import rqt from 'rqt'

/**
 * Returns a public IP address of the host.
 * @param {!_rqt.IpOptions} options Options for the request.
 */
export default async function ip(options = {}) {
  const {
    host = 'https://api.ipify.org',
  } = options
  const res = await rqt(host)
  return res
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').IpOptions} _rqt.IpOptions
 */