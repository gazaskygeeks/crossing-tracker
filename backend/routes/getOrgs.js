const getOrgsHandler = require('../handlers/getOrgs.js');

const getOrgs = {
  method:'GET',
  path:'/orgs',
  handler:getOrgsHandler
}

module.exports  =getOrgs;
