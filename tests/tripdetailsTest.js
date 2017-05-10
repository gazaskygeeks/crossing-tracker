const test = require('tape');
const server = require('../backend/server.js');

test('POST/tripDetails: test  ', (t) => {
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
    var cookies=  response.request.response.headers['set-cookie']
    var t1 =cookies[0].split(';');
    var t2 =t1[0].split('=');
    var t3 = t2[1];
    var option = {
      method: 'POST',
      url: '/tripdetails/1',
      payload:'',
      headers:{
        cookie:'sid='+t3
      }
    }
    server.inject(option, (res) => {
      const re={
        'available_seats':1,
        'trip_id':1,'time':'01:01 AM',
        'date':'08082017','pass_point_time':null,
        'passing_by':null,'user_id':1,
        'location_from':'GAZA','location_from_id': 1,'username':'admin',
        'email':'admin@admin.com','phone':'0598287410',
        'org_id':1,'org_name':'mercyco',
        'location_to':'RAMALLAH','location_to_id': 2
      }

      const conv=JSON.parse(res.payload);
      t.deepEqual(conv[0], re, 'get trip details');
      t.end();
      // eslint-disable-next-line no-console
      console.log('***************** MY TRIP TEST****************************');
    })
  })
})
