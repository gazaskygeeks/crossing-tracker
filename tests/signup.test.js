const test = require('tape');
const server = require('../backend/server.js');
// const client = require('../database/config.js');
test('POST /signup : compare recived data with send data', (t) => {
  const data = {
    username: 'abdallah',
    email: 'a@b.com',
    password: 'p@ssw0rd',
    phone: '0599001330',
    org_id: 1
  }
  const option = {
    method: 'POST',
    url: '/signup',
    payload: data
  }
  server.inject(option, (res) => {
    t.deepEqual(res.request.payload, data, 'The same data !!')
    t.end()
  })
})


test('POST /signup : test the route with invalid data', (t) => {
  const data = {
    username: 'abd',
    email: 'a@b.com',
    password: 'p@ssw0rd',
    phone: '0599001330',
    org_id: 1
  }
  const option = {
    method: 'POST',
    url: '/signup',
    payload: data
  }
  server.inject(option, (res) => {
    t.equal(res.statusCode, 400, 'Data validation test: check inputs')
    t.end()
  })
})

test('POST /signup : write data from signup into db', (t) => {
  const data = {
    username: 'abdallah',
    email: 'b@b.com',
    password: 'p@ssw0rd',
    phone: '0599001330',
    org_id: 1
  }
  const option = {
    method: 'POST',
    url: '/signup',
    payload: data
  }
  server.inject(option, (res) => {
    t.equal(res.statusCode, 200, 'New user just regestered')
    t.end()
  })
})

test('POST /signup : write data from signup into db with exitsted email', (t) => {
  const data = {
    username: 'abdallah',
    email: 'b@b.com',
    password: 'p@ssw0rd',
    phone: '0599001330',
    org_id: 1
  }
  const option = {
    method: 'POST',
    url: '/signup',
    payload: data
  }
  server.inject(option, (res) => {
    t.equal(res.statusCode, 400, 'User already regestered')
    t.end()
    // eslint-disable-next-line no-console
    console.log('*********************** Login Test********************************');
  })
})
