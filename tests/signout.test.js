const test = require('tape');
const server = require('../backend/server.js');
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
    t.end();
  })
})
// eslint-disable-next-line no-console
console.log('***************** Join Trip TEST****************************');
