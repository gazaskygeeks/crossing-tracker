/* eslint-disable */

const test = require('tape');
const server = require('../backend/server.js');
const dbutils = require('../database/dbutils.js');


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
    const query = `SELECT trip_id FROM trip WHERE user_id=$1;`;
    const user = ['4'];
    dbutils.runQuery(query, user, (err, result) => {
      if (err) {
        console.log('error: get trip_id by user_id in joinTripTest:', err);
        return;
      }
      const trip_id = result.rows[0].trip_id
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
        t.equal(conv.createdTrip[0].trip_id,trip_id, 'get the correct created trip data');
        t.equal(conv.joinedTrip.length,0, 'get the correct joined trip data');
        t.end();
        // eslint-disable-next-line no-console
        console.log('*****************Get Disapproved users TEST****************************');
      })
    })


  })
})
