/*
missing validations functions
and missing import handlers
and validations module
const signupget = require('./signupget');
*/
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
