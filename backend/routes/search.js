const searchHandler = require('../handlers/search.js');

const search = {
  method:'POST',
  path:'/search',
  handler:searchHandler,
  config: {
    auth:'session'
  }
}
module.exports =search;
