const acceptUserHandler = require('../handlers/acceptUser.js');

const acceptUser = {
  method:'POST',
  path:'/acceptuser',
  handler:acceptUserHandler,
  config: {
    auth:'session'
  }
}
module.exports =acceptUser;
