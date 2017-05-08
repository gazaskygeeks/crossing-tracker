const getOrgsHandler = require('../handlers/getOrgs.js');

const getOrgs = {
  method:'GET',
  path:'/organizations',
  handler: getOrgsHandler
}

module.exports  = getOrgs;
