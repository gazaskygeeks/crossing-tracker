const test = require('tape');
const server = require('../backend/server.js');


test('POST/mytrip: Test my trip ', (t) => {

  var data1 = {
    email: 'approvedUser@gmail.com', // from db.test.js line:82
    password: 'approvedUser' // from db.test.js line:81
  }
  var option1 = {
    method: 'POST',
    url: '/login',
    payload: data1
  }
  server.inject(option1, (response) => {
    var cookies = response.request.response.headers['set-cookie']
    var t1 = cookies[0].split(';');
    var t2 = t1[0].split('=');
    var t3 = t2[1];
    const option = {
      method: 'POST',
      url: '/mytrip',
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (res) => {
      const conv = JSON.parse(res.payload);
      t.equal(conv.createdTrip[0].trip_id,2, 'get the correct data');
      t.end();
      // eslint-disable-next-line no-console
      console.log('*****************Get Disapproved users TEST****************************');
    })

  })
})
