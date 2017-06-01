const test = require('tape');
const server = require('../backend/server.js');

test('POST/tripDetails: test  ', (t) => {
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
    var option = {
      method: 'POST',
      url: '/tripdetails/10000',
      payload: '',
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (res) => {
      const re = {
        available_seats: 2,
        date: '2017-04-21',
        email: 'approvedUser@gmail.com',
        location_from: 'RAMALLAH',
        location_from_id: 2,
        location_to: 'GAZA',
        location_to_id: 1,
        org_id: 1,
        org_name: 'mercyco',
        pass_point_time: '12:02',
        passing_by: 'Rammallah',
        phone: '059984253',
        time: '02:01',
        trip_id: 10000,
        user_id: 4,
        username: 'approvedUser'
      }

      const conv = JSON.parse(res.payload);
      t.deepEqual(conv[0], re, 'get trip details');
      t.end();
      // eslint-disable-next-line no-console
      console.log('***************** MY TRIP TEST****************************');
    })
  })
})
