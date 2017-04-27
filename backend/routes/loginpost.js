const loginPostHandler = require('../handlers/loginpost.js');
const validation = require('../validation.js');
const loginpost = {
  method : 'POST',
  path: '/login',
  handler : loginPostHandler,
  config:{
    validate:{
      payload:validation.loginvalidation
    },auth:false
  }
}
module.exports=loginpost
