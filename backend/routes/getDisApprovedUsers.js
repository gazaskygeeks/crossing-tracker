const handler = require('../handlers/getDisApprovedUsers.js');

const getDisApproved = {
  method:'GET',
  path:'/disApproved',
  handler:handler,
  config:{
    auth:'session'
  }
}
module.exports =getDisApproved;
