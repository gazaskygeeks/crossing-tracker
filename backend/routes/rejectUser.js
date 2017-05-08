const rejectUserHandler = require('../handlers/rejectUser.js');
const rejectUser={
  method:'POST',
  path:'/rejectuser',
  handler:rejectUserHandler,
  config: {
    auth:'session'
  }

}
module.exports=rejectUser
