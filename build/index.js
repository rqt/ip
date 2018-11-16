let rqt = require('rqt'); if (rqt && rqt.__esModule) rqt = rqt.default;

/**
 * Returns a public IP address of the host.
 * @param {Options} options Options for the request.
 * @param {string} [options.host="https://api.ipify.org"] The address from which to get the IP address. Default `https://api.ipify.org`.
 */
               async function ip(options = {}) {
  const {
    host = 'https://api.ipify.org',
  } = options
  const res = await rqt(host)
  return res
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Options Options for the request.
 * @prop {string} [host="https://api.ipify.org"] The address from which to get the IP address. Default `https://api.ipify.org`.
 */


module.exports = ip