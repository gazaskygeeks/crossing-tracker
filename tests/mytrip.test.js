const test = require('tape');
const server = require('../backend/server.js');


test('POST/mytrip: Test my trip ', (t) => {

  var data1 = {
    email: 'approvedUser@gmail.com',// from db.test.js line:82
    password: 'approvedUser'// from db.test.js line:81
  }
  var  option1 = {
    method: 'POST',
    url: '/login',
    payload: data1
  }
  server.inject(option1, (response) => {
    // console.log(response);
    var cookies=  response.request.response.headers['set-cookie']
    var t1 =cookies[0].split(';');
    var t2 =t1[0].split('=');
    var t3 = t2[1];
    const option = {
      method: 'POST',
      url: '/mytrip',
      payload: {user_id:3},
      headers:{
        cookie:'sid='+t3
      }
    }
    server.inject(option, (res) => {
      const re=
        {
          available_seats: 2, date: null,
          location_from_id: 1, location_to_id: 2,
          pass_point_time: '12:02', passing_by: 'Rammallah',
          trip_id: 2, user_id: 3
        }
      const conv=JSON.parse(res.payload);

      t.deepEqual(conv[0]  , re, 'Bad request | email must be valid');
      t.end();
    })

  })
})






// eslint-disable-next-line no-console
console.log('***************** Accept User TEST****************************');
