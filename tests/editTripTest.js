/* eslint-disable */

const test = require('tape');
const server = require('../backend/server.js');
const dbutils = require('../database/dbutils.js');
test('POST /edittrip : edit trip that not exist', (t) => {

  var data = {
    tripdate: '2017-04-21',
    time: '02:01',
    location_from: 2,
    location_to: 1,
    details: 'Rammallah',
    available_seats: 2,
    duration:30,
    trip_id: 55
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
      method: 'PUT',
      url: '/trip',
      payload: data,
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (res) => {
      t.equal(res.result.msg, 'No Trip Found', 'No Trip Found');
      t.end();
    })

  })

})

test('POST /edittrip : edit trip by a different user ', (t) => {

  var data = {
    tripdate: '2017-04-21',
    time: '02:01',
    location_from: 2,
    location_to: 1,
    details: 'Rammallah',
    duration:30,
    available_seats: 2
  }

  var data1 = {
    email: 'fake@fake.com', // from db.test.js line:82
    password: 'notApprovedUser' // from db.test.js line:81
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
        console.log('error: get trip_id by user_id in editTripTest:', err);
        return;
      }
      const final = Object.assign(data, {
        trip_id: result.rows[0].trip_id
      })
      var cookies = response.request.response.headers['set-cookie']
      var t1 = cookies[0].split(';');
      var t2 = t1[0].split('=');
      var t3 = t2[1];
      var option = {
        method: 'PUT',
        url: '/trip',
        payload: final,
        headers: {
          cookie: 'sid=' + t3
        }
      }
      server.inject(option, (res) => {
        t.equal(res.result.msg, 'Not Allow to Edit this trip', 'Not Allow to Edit this trip');
        t.end();
      })
    })

  })
})

test('POST /edittrip : edit trip Successfully ', (t) => {


  var data = {
    tripdate: '2017-04-21',
    time: '02:01',
    location_from: 2,
    location_to: 1,
    details: 'Rammallah',
    duration:30,
    available_seats: 2
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
    const query = `SELECT trip_id FROM trip WHERE user_id=$1;`;
    const user = ['4'];
    dbutils.runQuery(query, user, (err, result) => {
      if (err) {
        console.log('error: get trip_id by user_id in editTripTest:', err);
        return;
      }
      const final = Object.assign(data, {
        trip_id: result.rows[0].trip_id
      })
      var cookies = response.request.response.headers['set-cookie']
      var t1 = cookies[0].split(';');
      var t2 = t1[0].split('=');
      var t3 = t2[1];
      var option = {
        method: 'PUT',
        url: '/trip',
        payload: final,
        headers: {
          cookie: 'sid=' + t3
        }
      }
      server.inject(option, (res) => {
        t.equal(res.result.msg, 'Your Trip Edit Successfully', 'Trip Edit Successfully');
        t.end();
        // eslint-disable-next-line no-console
        console.log('***************** Trip Details TEST****************************');
      })
    })
  })
})
