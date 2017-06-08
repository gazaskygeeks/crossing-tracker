const checkUserHandler = require('../handlers/checkUser.js');

const checkUser = {
  method:'GET',
  path:'/userType',
  handler: checkUserHandler,
  config: {
    auth:'session'
  }
}

module.exports  = checkUser;
