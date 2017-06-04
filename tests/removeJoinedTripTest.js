/* eslint-disable */

const test = require('tape');
const server = require('../backend/server.js');
const dbutils = require('../database/dbutils.js');

test('DELETE/trip: Remove Joined Trip successfully', (t) => {
  const data = {
    email: 'approvedAdmin@gmail.com', // from db.test.js line:82
    password: 'approvedAdmin' // from db.test.js line:81
  }
  const option = {
    method: 'POST',
    url: '/login',
    payload: data
  }
  server.inject(option, (res) => {
    const query = `SELECT trip_id FROM trip WHERE user_id=$1;`;
    const user = ['4'];
    dbutils.runQuery(query, user, (err, result) => {
      if (err) {
        console.log('error: get trip_id by user_id in removes join trip Test:', err);
        return;
      }
      const data = result.rows[0]
      var cookies = res.request.response.headers['set-cookie']
      var t1 = cookies[0].split(';');
      var t2 = t1[0].split('=');
      var t3 = t2[1];
      var option1 = {
        method: 'DELETE',
        url: '/trip',
        payload: data,
        headers: {
          cookie: 'sid=' + t3
        }
      }
      server.inject(option1, (res) => {
        const result = JSON.parse(res.payload)
        t.equal(result.msg, 'Your trip removed successfully', 'Trip removed Succussfuly');
        t.end();
        // eslint-disable-next-line no-console
        console.log('*****************Sign out TEST****************************');
      })
    })
  })
})
