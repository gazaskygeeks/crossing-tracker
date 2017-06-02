const test = require('tape');
const server = require('../backend/server.js');
test('POST /forgetPassowrd : route exist', (t) => {

  var option = {
    method: 'POST',
    url: '/forget',
    payload: ''
  }
  server.inject(option, (res) => {
    t.notEqual(res.statusCode, 404, 'ok ! Route exist');
    t.end();
  })
})

test('POST /forgetPassowrd : test without params', (t) => {

  var option = {
    method: 'POST',
    url: '/forget',
    payload: ''
  }
  server.inject(option, (res) => {
    t.equal(res.result.msg, 'No email found', 'ok ! no Email found');
    t.end();
  })
})

test('POST /forgetPassowrd : test wrong email', (t) => {

  var option = {
    method: 'POST',
    url: '/forget',
    payload:{email:'test@gmail.com'}
  }
  server.inject(option, (res) => {
    t.equal(res.result.msg, 'Email not found', 'ok ! Email not found');
    t.end();
  })
})

test('POST /forgetPassowrd : test correct email', (t) => {

  var option = {
    method: 'POST',
    url: '/forget',
    payload:{email:'approvedAdmin@gmail.com'}
  }
  server.inject(option, (res) => {
    t.equal(res.result.msg,
       'An e-mail has been sent to your email with further instructions.',
        'ok ! Email Found   ');
    t.end();
    // eslint-disable-next-line no-console
    console.log('*****************Sign out TEST****************************');

  })
})
