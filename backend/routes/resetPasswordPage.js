const resetPasswordPageHandler = require('../handlers/resetPasswordPage.js');
const resetPasswordPage = {
  method:'GET',
  path:'/reset/',
  handler:resetPasswordPageHandler,
  config: {
    auth:false
  }
}
module.exports =resetPasswordPage;
