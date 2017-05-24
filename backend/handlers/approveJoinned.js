const acceptUserHandler = require('../handlers/approveJoinned.js');

const acceptUser = {
  method:'POST',
  path:'/approve',
  handler:acceptUserHandler,
  config: {
    auth:'session'
  }
}
module.exports =acceptUser;
