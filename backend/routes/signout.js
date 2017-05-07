const signOutHandler = require('../handlers/signout.js');

const signOut = {
  method:'POST',
  path:'/signout',
  handler:signOutHandler,
  config:{
    auth:false
  }
}
module.exports =signOut;
