const forgetPassowrdHandler = require('../handlers/forgetPassword.js');

const forgetPassowrd = {
  method:'POST',
  path:'/forget',
  handler:forgetPassowrdHandler,
  config: {
    auth:false
  }
}
module.exports =forgetPassowrd;
