const signupGetHandler = require('../handlers/signupget.js');
const signupGet = {
  method:'GET',
  path:'/signup',
  handler:signupGetHandler
}

module.exports =signupGet;
