
const validation = require('../validation.js');
const createTripPostHandler = require('../handlers/createtrippsot.js');
const createTripPost = {
  method:'POST',
  path:'/createtrip',
  handler:createTripPostHandler,
  config: {
    validate: {
      payload: validation.tripvalidation
    }
  }
}
module.exports =createTripPost;
