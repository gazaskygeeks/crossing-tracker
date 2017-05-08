const getLocationsHandler = require('../handlers/getLocations.js');

const getLocations = {
  method:'GET',
  path:'/locations',
  handler: getLocationsHandler
}

module.exports  = getLocations;
