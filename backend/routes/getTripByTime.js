const getTripByTimeHandler = require('../handlers/getTripByTime.js');

const getTripByTime = {
  method:'POST',
  path:'/tripByTime',
  handler:getTripByTimeHandler,
  config: {
    auth:'session'
  }
}

module.exports =getTripByTime;
