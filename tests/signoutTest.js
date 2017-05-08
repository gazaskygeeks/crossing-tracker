const test = require('tape');
const server = require('../backend/server.js');
const client = require('../database/config.js');

test('POST /signoit : signout', (t) => {

  var option = {
    method: 'POST',
    url: '/signout',
    payload:'',
    headers:{
      cookie:'sid=thisistest'
    }
  }
  server.inject(option, (res) => {
    t.equal(typeof res.request.payload,'object', 'data is object')
    client.end()
    server.stop(t.end());
  })
})
