const allTripsHandler = require('../handlers/allTrips.js');

const allTrips = {
  method:'GET',
  path:'/allTrips',
  handler:allTripsHandler,
  config: {
    auth:'session'
  }
}
module.exports =allTrips;
