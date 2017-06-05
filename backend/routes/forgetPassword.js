const forgetpasswordHandler = require('../handlers/forgetPassword.js');

const forgetpassword = {
  method:'POST',
  path:'/forget',
  handler:forgetpasswordHandler,
  config: {
    auth:false
  }
}
module.exports =forgetpassword;
