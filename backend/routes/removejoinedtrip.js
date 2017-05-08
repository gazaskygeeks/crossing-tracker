const removeJoinedTripHandler = require('../handlers/removejoinedtrip.js');

const removeJoinedTrip = {
  method: 'DELETE',
  path: '/trip',
  handler: removeJoinedTripHandler,
  config: {
    auth:'session'
  }
}

module.exports = removeJoinedTrip
