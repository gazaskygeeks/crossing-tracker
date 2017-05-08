const validation = require('../validation.js');

const createTripHandler = require('../handlers/createtrip.js');

const createTrip = {
  method:'POST',
  path:'/trip',
  handler:createTripHandler,
  config: {
    validate: {
      payload: validation.tripvalidation
    },
    auth:'session'
  }
}
module.exports =createTrip;
