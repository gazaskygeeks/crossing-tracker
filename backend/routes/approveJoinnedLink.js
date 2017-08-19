const acceptUserHandler = require('../handlers/approveJoinnedLink.js');

const acceptUser = {
  method:'GET',
  path:'/approve/{token}/{status}',
  handler:acceptUserHandler,
  config: {
    auth:'session'
  }
}

module.exports =acceptUser;
