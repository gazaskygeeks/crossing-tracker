/* eslint-disable */

const dbutils = require('../database/dbutils.js');
const test = require('tape');
const server = require('../backend/server.js');
test('DELETE /cancelTrip : cancel trip that doesnt have users', (t) => {

  var data = {
    tripdate: '2017-06-30',
    time: '01:01',
    location_from: 1,
    location_to: 2,
    details: 'asxsacs',
    available_seats: 3,
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
      url: '/trip',
      payload: data,
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (response) => {
      const www = `SELECT trip_id FROM trip WHERE user_id=$1;`;
      const user = ['4'];
      dbutils.runQuery(www, user, (err, result) => {
        if (err) {
          console.log('error: get trip_id by user_id in joinTripTest:', err);
          return;
        }
        const trip_id = result.rows[0].trip_id
        const msg = 'Sorry I have to cancel my trip'
        const option2 = {
          method: 'DELETE',
          url: '/cancelTrip',
          payload: {trip_id: trip_id, msg: msg},
          headers: {
            cookie: 'sid=' + t3
          }
        }
        server.inject(option2, (res) => {
          const result = JSON.parse(res.payload)
          t.equal(result.msg, 'Your trip canceled successfully', 'trip canceled successfully')
          t.end();
        })

      })
    })
  })
})

test('DELETE /cancelTrip : cancel trip that having user', (t) => {

  var data = {
    tripdate: '2017-06-29',
    time: '01:01',
    location_from: 1,
    location_to: 2,
    details: 'asxsacs',
    available_seats: 3,
    duration:30
  }

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
    var cookies = response.request.response.headers['set-cookie']
    var t1 = cookies[0].split(';');
    var t2 = t1[0].split('=');
    var t3 = t2[1];
    var option = {
      method: 'POST',
      url: '/trip',
      payload: data,
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (response) => {
      const www = `SELECT trip_id FROM trip WHERE user_id=$1;`;
      const user = ['8'];
      dbutils.runQuery(www, user, (err, result) => {
        if (err) {
          console.log('error: get trip_id by user_id in joinTripTest:', err);
          return;
        }
        const trip_id = result.rows[0].trip_id
        const msg = 'Sorry I have to cancel my trip'
        const usertripQuery = `INSERT INTO  usertrip (user_id ,trip_id) VALUES ($1,$2);`;
        const da = ['7', trip_id];
        dbutils.runQuery(usertripQuery, da, (err, result) => {
          // const usertripQuery = `INSERT INTO  usertrip (user_id ,trip_id) VALUES ($1,$2);`;
          const da = ['2', trip_id];
          dbutils.runQuery(usertripQuery, da, (err, result) => {

            const option2 = {
              method: 'DELETE',
              url: '/cancelTrip',
              payload: {trip_id: trip_id, msg: msg},
              headers: {
                cookie: 'sid=' + t3
              }
            }
            server.inject(option2, (res) => {
              const result = JSON.parse(res.payload)
              t.equal(result.msg, 'Your trip canceled successfully and all joined deleted', 'trip canceled successfully')
              t.end();
            })
          })
        })
      });
    })
  })
})
