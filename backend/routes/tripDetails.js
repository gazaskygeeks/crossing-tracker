const tripDetailsHandler = require('../handlers/tripDetails.js');

const tripDetails = {
  method:'POST',
  path:'/tripdetails/{id}',
  handler:tripDetailsHandler,
  config: {
    auth:'session'
  }
}
module.exports = tripDetails;
