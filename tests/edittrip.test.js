const test = require('tape');
const server = require('../backend/server.js');
test('POST /edittrip : edit trip not exist', (t) => {

  var data ={
    user_id:1,
    tripdate:'2017-04-25',
    time:'01:01',
    location_from_id:1,
    location_to_id:2,
    passing_by:'Mohammed',
    pass_point_time:'01:01',
    available_seats:1,
  }

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
      url: '/trip',
      payload:data,
      headers:{
        cookie:'sid='+t3
      }
    }

    server.inject(option, (response) => {
      var data3 ={
        user_id:1,
        tripdate:'2017-04-21',
        time:'02:01',
        location_from_id:2,
        location_to_id:1,
        passing_by:'Rammallah',
        pass_point_time:'12:02',
        available_seats:2,
      }

      var  option3 = {
        method: 'PUT',
        url: '/trip',
        payload: data3,
        headers:{
          cookie:'sid='+t3
        }
      }
      server.inject(option3, (res) => {
        t.equal(res.result.msg,'No Trip Found', 'No Trip Found');

        t.end();

      })

    })

  })
})
test('POST /edittrip : edit trip exist by another user ', (t) => {

  var data ={
    user_id:2,
    tripdate:'2017-04-25',
    time:'01:01',
    location_from_id:1,
    location_to_id:2,
    passing_by:'Mohammed',
    pass_point_time:'01:01',
    available_seats:1,
  }

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
      url: '/trip',
      payload:data,
      headers:{
        cookie:'sid='+t3
      }
    }

    server.inject(option, (response) => {
      var data3 ={
        user_id:2,
        trip_id:1,
        tripdate:'2017-04-21',
        time:'02:01',
        location_from_id:2,
        location_to_id:1,
        passing_by:'Rammallah',
        pass_point_time:'12:02',
        available_seats:2,
      }

      var  option3 = {
        method: 'PUT',
        url: '/trip',
        payload: data3,
        headers:{
          cookie:'sid='+t3
        }
      }
      server.inject(option3, (res) => {
        t.equal(res.result.msg,'Not Allow to Edit this trip', 'Not Allow to Edit this trip');

        t.end();

      })

    })

  })
})

test('POST /edittrip : edit trip Successfully ', (t) => {

  var data ={
    user_id:2,
    tripdate:'2017-04-25',
    time:'01:01',
    location_from_id:1,
    location_to_id:2,
    passing_by:'Mohammed',
    pass_point_time:'01:01',
    available_seats:1,
  }

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
      url: '/trip',
      payload:data,
      headers:{
        cookie:'sid='+t3
      }
    }

    server.inject(option, (response) => {
      var data3 ={
        user_id:3,
        trip_id:2,
        tripdate:'2017-04-21',
        time:'02:01',
        location_from_id:2,
        location_to_id:1,
        passing_by:'Rammallah',
        pass_point_time:'12:02',
        available_seats:2,
      }

      var  option3 = {
        method: 'PUT',
        url: '/trip',
        payload: data3,
        headers:{
          cookie:'sid='+t3
        }
      }
      server.inject(option3, (res) => {
        t.equal(res.result.msg,'Your Trip Edit Successfully', 'Trip Edit Successfully');

        t.end();

      })

    })

  })
})
// eslint-disable-next-line no-console
console.log('***************** Trip Details TEST****************************');
