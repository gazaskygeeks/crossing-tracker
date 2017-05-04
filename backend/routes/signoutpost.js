const signOutpostHandler = require('../handlers/signoutpost.js');

const signOutpost = {
  method:'POST',
  path:'/signout',
  handler:signOutpostHandler,
  config:{
    auth:false
  }
}
module.exports =signOutpost;
