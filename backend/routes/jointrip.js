const joinTripHandler = require('../handlers/jointrip.js');

const jointrip = {
  method: 'POST',
  path: '/triprequest',
  handler: joinTripHandler,
  config: {
    auth:'session'
  }
}

module.exports = jointrip
