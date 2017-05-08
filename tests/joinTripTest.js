const test = require('tape');
const server = require('../backend/server.js');

test('POST /jointrip : test1', (t) => {
  var data = {
    trip_id: 1
  }

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
      url: '/triprequest',
      payload: data,
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (res) => {

      t.equal(res.statusCode, 200, 'User joined the trip')
      t.end();
    })
  })
})

test('POST /jointrip : test2', (t) => {
  var data = {
    trip_id: 1
  }

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
      url: '/triprequest',
      payload: data,
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (resp) => {
      t.equal(resp.statusCode, 401, 'User already joined this trip')
      t.end();
    })
  })
})

test('POST /jointrip : test 3', (t) => {
  var data = {
    trip_id: 1
  }

  var data1 = {
    email: 'approvedAdmin@gmail.com', // from db.test.js line:82
    password: 'approvedAdmin' // from db.test.js line:81
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
      url: '/triprequest',
      payload: data,
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (response) => {
      t.equal(response.statusCode, 400, 'Trip is full')
      t.end()
      // eslint-disable-next-line no-console
      console.log('***************** Edit Trip TEST****************************');
    })

  })
})
