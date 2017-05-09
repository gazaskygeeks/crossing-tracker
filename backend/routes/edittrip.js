const validation = require('../validation.js');
const editTripHandler = require('../handlers/edittrip.js');
const editTrip = {
  method:'PUT',
  path:'/trip',
  handler:editTripHandler,
  config: {
    validate: {
      payload: validation.editTripValidation
    },
    auth:'session'
  }
}
module.exports =editTrip;
