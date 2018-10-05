let rqt = require('rqt'); if (rqt && rqt.__esModule) rqt = rqt.default;

/**
 * Returns a public IP address of the host.
 */
               async function ip() {
  const res = await rqt('https://api.ipify.org')
  return res
}

module.exports = ip