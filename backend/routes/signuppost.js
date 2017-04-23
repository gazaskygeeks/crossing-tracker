/*
missing validations functions
and missing import handlers
and validations module
const signupget = require('./signupget');
*/
const signupPostHandler = require('../handlers/signuppost.js');
const signupPost = {
  method:'POST',
  path:'/signup',
  handler:signupPostHandler
}
module.exports =signupPost;
