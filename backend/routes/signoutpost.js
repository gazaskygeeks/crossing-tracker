const signOutpostHandler = require('../handlers/signoutpost.js');

const signOutpost = {
  method:'POST',
  path:'/signout',
  handler:signOutpostHandler
}
module.exports =signOutpost;
