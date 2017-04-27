const test = require('tape');
const server = require('../backend/server.js');

test('test the route POST /signup with invalid data', (t) => {
  const data = {
    username: 'abd',
    email: 'a@b.com',
    password: 'p@ssw0rd',
    phone: '0599001330',
    org_id: 1,
    user_type: 'user',
    approved: 0
  }
  const option = {
    method: 'POST',
    url: '/signup',
    payload: data
  }
  server.inject(option, (res) => {
    t.equal(res.statusCode, 400, 'test pass')
  })
})
