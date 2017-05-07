const mytripHandler = require('../handlers/mytrip.js');
const mytrip = {
  method:'POST',
  path:'/mytrip',
  handler:mytripHandler
}
module.exports =mytrip;
