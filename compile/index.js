const _ip = require('./ip')

/**
 * Returns a public IP address of the host.
 * @param {!_rqt.IpOptions} options Options for the request.
 * @param {string} [options.host="https://api.ipify.org"] The address from which to get the IP address. Default `https://api.ipify.org`.
 * @return {string}
 */
function ip(options) {
  return _ip(options)
}

module.exports = ip

/* typal types/index.xml closure noSuppress */
/**
 * @typedef {_rqt.IpOptions} IpOptions `＠record` Options for the request.
 */
/**
 * @typedef {Object} _rqt.IpOptions `＠record` Options for the request.
 * @prop {string} [host="https://api.ipify.org"] The address from which to get the IP address. Default `https://api.ipify.org`.
 */


 console.log('testing compile')