const validation = require('../validation.js');
/*
missing validations functions
and missing import handlers
and validations module
const signupget = require('./signupget');
*/

const signupHandler = require('../handlers/signup.js');
const signup = {
  method:'POST',
  path:'/signup',
  handler:signupHandler,
  config: {
    validate: {
      payload: validation.signupvalidation
    },
    auth:false
  }
}
module.exports =signup;
