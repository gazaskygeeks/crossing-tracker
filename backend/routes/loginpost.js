const loginpostHandler = require('../handlers/loginpost.js');
const signinPost = {
  method:'Post',
  path:'/login',
  handler:loginpostHandler
}

module.exports =signinPost;
