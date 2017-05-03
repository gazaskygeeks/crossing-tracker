const jointripproc = require('../handlers/jointrip.js');

const jointrip = {
  method: 'POST',
  path: '/jointrip',
  handler: jointripproc
}

module.exports = jointrip
