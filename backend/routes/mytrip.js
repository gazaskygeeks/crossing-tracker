const mytripHandler = require('../handlers/mytrip.js');
const mytrip = {
  method:'POST',
  path:'/mytrip',
  handler:mytripHandler,
  config: {
    auth:'session'
  }
}
module.exports =mytrip;
