const cancelTripHandler = require('../handlers/cancelTrip.js');

const canselTrip = {
  method:'POST',
  path:'/cancelTrip',
  handler:cancelTripHandler,
  config: {
    auth:'session'
  }
}
module.exports =canselTrip;
