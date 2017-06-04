/* eslint-disable */

const test = require('tape');
const server = require('../backend/server.js');
test('POST /createtrip : test if recive the the correct Data', (t) => {

  var data ={
    tripdate: '2017-07-02',
    time: '01:01',
    location_from: 1,
    location_to: 2,
    passing_by:'asxsacs',
    pass_point_time:'01:01',
    available_seats: 1,

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
      t.equal(typeof response.request.payload,'object', 'data is object')
      t.end();

    })
  })

})


test('POST /createtrip : test data fields', (t) => {

  const data1 = {
    email: 'approvedUser@gmail.com',// from db.test.js line:82
    password: 'approvedUser'// from db.test.js line:81
  }
  const option1 = {
    method: 'POST',
    url: '/login',
    payload: data1
  }
  server.inject(option1, (response) => {
    var cookies=  response.request.response.headers['set-cookie']
    var t1 =cookies[0].split(';');
    var t2 =t1[0].split('=');
    var t3 = t2[1];
    let data ={
    }

    var option = {
      method: 'POST',
      url: '/trip',
      payload:data,
      headers:{
        cookie:'sid='+t3
      }
    }

    server.inject(option, (response) => {

      t.equal(response.statusCode, 400, 'data fields is required')

      var data ={
        tripdate: '2017-04-02',
        time: '01:01',
        location_from: 1,
        location_to: 2,
        passing_by:'asxsacs',
        pass_point_time:'01:1',
        available_seats: 2,

      }
      var  option = {
        method: 'POST',
        url: '/trip',
        payload:data,
        headers:{
          cookie:'sid='+t3
        }
      }
      server.inject(option, (response) => {
        t.equal(response.statusCode, 400, 'check pas point time')
        t.end();
      })
    })
  })

})

test('POST /createtrip :check duplicate trip', (t) => {
  const data1 = {
    email: 'approvedUser@gmail.com',// from db.test.js line:82
    password: 'approvedUser'// from db.test.js line:81
  }
  const option1 = {
    method: 'POST',
    url: '/login',
    payload: data1,
  }
  server.inject(option1, (response) => {
    var cookies=  response.request.response.headers['set-cookie']
    var t1 =cookies[0].split(';');
    var t2 =t1[0].split('=');
    var t3 = t2[1];
    let data ={
    }
    let option = {
      method: 'POST',
      url: '/trip',
      payload:data,
      headers:{
        cookie:'sid='+t3
      }
    }
    server.inject(option, (response) => {

      t.equal(response.statusCode, 400, 'data fields is required')

      var data ={
        tripdate: '2017-07-02',
        time: '01:01',
        location_from: 1,
        location_to: 2,
        passing_by:'asxsacs',
        pass_point_time:'01:01',
        available_seats: 2,

      }
      option = {
        method: 'POST',
        url: '/trip',
        payload:data,
        headers:{
          cookie:'sid='+t3
        }
      }
      server.inject(option, (response) => {
        t.equal(response.result.statusCode, 409, 'trip already exists')
        t.end();
        // eslint-disable-next-line no-console
        console.log('********************************* Join Trip Test***********************');
      })
    })
  })
})
