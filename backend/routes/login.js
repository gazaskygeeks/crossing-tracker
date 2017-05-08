const loginHandler = require('../handlers/login.js');
const validation = require('../validation.js');
const login = {
  method : 'POST',
  path: '/login',
  handler : loginHandler,
  config:{
    validate:{
      payload:validation.loginvalidation
    },auth:false
  }
}
module.exports=login
