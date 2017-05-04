const validation = require('../validation.js');
const editTripPostHandler = require('../handlers/edittrippsot.js');
const editTripPost = {
  method:'POST',
  path:'/edittrip',
  handler:editTripPostHandler,
  config: {
    validate: {
      payload: validation.ediTripValidation
    },
    auth:'session'
  }
}
module.exports =editTripPost;
