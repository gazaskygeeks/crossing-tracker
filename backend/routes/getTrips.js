const getTripsHandler = require('../handlers/getTrips.js');

const getTrips = {
  method:'POST',
  path:'/trips',
  handler:getTripsHandler
}
module.exports =getTrips;
