const cancelTripHandler = require('../handlers/cancelTrip.js');

const canselTrip = {
  method:'DELETE',
  path:'/cancelTrip',
  handler:cancelTripHandler,
  config: {
    auth:'session'
  }
}
module.exports =canselTrip;
