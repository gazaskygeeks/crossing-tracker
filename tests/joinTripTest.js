/* eslint-disable */

const test = require('tape');
const server = require('../backend/server.js');
const dbutils = require('../database/dbutils.js');


test('POST /jointrip : test1', (t) => {
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
    const query = `SELECT trip_id FROM trip WHERE user_id=$1;`;
    const user = ['4'];
    dbutils.runQuery(query, user, (err, result) => {
      if (err) {
        console.log('error: get trip_id by user_id in joinTripTest:', err);
        return;
      }
      var data = result.rows[0]
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
})

test('POST / approve: accept the request of join trip', (t) => {
  var data1 = {
    email: 'approvedUser@gmail.com', // from db.test.js line:82
    password: 'approvedUser' // from db.test.js line:81
  }
  var option1 = {
    method: 'POST',
    url: '/login',
    payload: data1
  }

  const data = {
    trip_id: 10000,
    userJoinnedId: 7,
    memberStatus: 1
  };

  server.inject(option1, (response) => {
    const query = `SELECT trip_id FROM trip WHERE user_id=$1;`;
    const user = ['4'];
    dbutils.runQuery(query, user, (err, result) => {
      if (err) {
        console.log('error: get trip_id by user_id in joinTripTest:', err);
        return;
      }
      var final = Object.assign(data, result.rows[0]);
      var cookies = response.request.response.headers['set-cookie']
      var t1 = cookies[0].split(';');
      var t2 = t1[0].split('=');
      var t3 = t2[1];
      var option = {
        method: 'POST',
        url: '/approve',
        payload: final,
        headers: {
          cookie: 'sid=' + t3
        }
      }
      server.inject(option, (res) => {
        t.equal(res.statusCode, 200, 'Update user_approved status successfully')
        t.end();
      })
    })
  })
})


test('POST /jointrip : test2', (t) => {
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
    const query = `SELECT trip_id FROM trip WHERE user_id=$1;`;
    const user = ['4'];
    dbutils.runQuery(query, user, (err, result) => {
      if (err) {
        console.log('error: get trip_id by user_id in joinTripTest:', err);
        return;
      }
      var data = result.rows[0]
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
  })





test('POST /jointrip : test 3', (t) => {
  var data1 = {
    email: 'superAdmin@gmail.com', // from db.test.js line:82
    password: 'superAdmin' // from db.test.js line:81
  }
  var option1 = {
    method: 'POST',
    url: '/login',
    payload: data1
  }
  server.inject(option1, (response) => {

    const query = `SELECT trip_id FROM trip WHERE user_id=$1;`;
    const user = ['4'];
    dbutils.runQuery(query, user, (err, result) => {
      if (err) {
        console.log('error: get trip_id by user_id in joinTripTest:', err);
        return;
      }
      var data = result.rows[0]
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
        console.log('***************** Accept User Test****************************');
      })

    })
  })
})
