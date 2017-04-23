const signupget = require('../handlers/signupget.js');
const signupGet = {
  method:'GET',
  path:'/signup',
  handler:signupget
}

module.exports =signupGet;
