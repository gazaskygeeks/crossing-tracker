const mytripPostHandler = require('../handlers/mytrippost.js');
const mytripPost = {
  method:'POST',
  path:'/mytrip',
  handler:mytripPostHandler
}
module.exports =mytripPost;
