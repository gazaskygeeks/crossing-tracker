const resetPasswordHandler = require('../handlers/resetPassword.js');
const resetPassword = {
  method:'POST',
  path:'/reset',
  handler:resetPasswordHandler,
  config: {
    auth:false
  }
}
module.exports =resetPassword;
