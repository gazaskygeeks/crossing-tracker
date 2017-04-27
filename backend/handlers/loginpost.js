const hash = require('../utils.js');
const user = require('../../database/userhelpers.js')
module.exports = (request, reply) => {
  reply(request.payload);
}
