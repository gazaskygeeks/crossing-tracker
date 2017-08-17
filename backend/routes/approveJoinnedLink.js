const acceptUserHandler = require('../handlers/approveJoinnedLink.js');

const acceptUser = {
  method:'POST',
  path:'/approve/:trip_id/:token/:status',
  handler:acceptUserHandler,
  config: {
    auth:'session'
  }
}

module.exports =acceptUser;
