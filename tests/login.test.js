const test = require('tape');
const server = require('../backend/server.js');
const generateRandomPayload = (data) => {
  return Object.assign({
    email: 'email' + Math.floor(Math.random() * 100000) + '@gmail.com',
    password: 'pass' + Math.floor(Math.random() * 100000)
  },
    data)
}

test('POST/login: with in INVALID email ', (t) => {
  const data = generateRandomPayload({
    email: 'fake'
  })
  const option = {
    method: 'POST',
    url: '/login',
    payload: data
  }
  server.inject(option, (res) => {
    t.equal(res.statusCode, 400, 'Bad request | email must be valid');
    t.end();
  })

})
test('POST/login: with in INVALID password (short password)', (t) => {
  const data = generateRandomPayload({
    password: '123'
  })
  const option = {
    method: 'POST',
    url: '/login',
    payload: data
  }
  server.inject(option, (res) => {
    t.equal(res.statusCode, 400, 'Bad request | length must be at least 6 characters long');
    t.end()
  })
})

test('POST/login: with VALID email and password BUT email is NOT Exist', (t) => {
  const data = generateRandomPayload({
    email: 'notcorrect@gmail.com'
  })
  const option = {
    method: 'POST',
    url: '/login',
    payload: data
  }
  server.inject(option, (res) => {
    const result = JSON.parse(res.payload)
    t.equal(result.statusCode, 401, 'Get status code correctly')
    t.equal(result.message, 'Email is not Exist', 'Get error message successfully')
    t.end()
  })
})
test('POST/login: with VALID email and password BUT password is NOT CORRECT', (t) => {
  const data = {
    email: 'approvedUser@gmail.com',//from db.test.js file line:82
    password: 'notcorrect'
  }
  const option = {
    method: 'POST',
    url: '/login',
    payload: data
  }
  server.inject(option, (res) => {
    const result = JSON.parse(res.payload)
    t.equal(result.statusCode, 401, 'Get status code correctly')
    t.equal(result.message, 'Password is not correct', 'Get error message successfully')
    t.end()
  })
})
test('POST/login: with correct pass&email | USER not approved', (t) => {
  const data = {
    email: 'notApprovedUser@gmail.com',// from db.test.js line:73
    password: 'notApprovedUser' // from db.test.js line: 72
  }
  const option = {
    method: 'POST',
    url: '/login',
    payload: data
  }
  server.inject(option, (res) => {
    const result = JSON.parse(res.payload)
    t.equal(result.statusCode, 401, 'Get status code correctly')
    t.equal(result.message, 'Wait until the admin approved your request', 'Get error message successfully')
    t.end()
  })

})
test('POST/login: with correct pass&email | USER approved', (t) => {
  const data = {
    email: 'approvedUser@gmail.com',// from db.test.js line:82
    password: 'approvedUser'// from db.test.js line:81
  }
  const option = {
    method: 'POST',
    url: '/login',
    payload: data
  }
  server.inject(option, (res) => {
    const result = JSON.parse(res.payload)
    t.equal(res.statusCode, 200, 'Get status code correctly')
    t.equal(result.message, 'redirect to home page', 'Get error message successfully')
    t.end()
  })
})
test('POST/login: with correct pass&email | ADMIN not approved', (t) => {
  const data = {
    email: 'notApprovedAdmin@gmail.com',// from db.test.js line:91
    password: 'notApprovedAdmin'// from db.test.js line:90
  }
  const option = {
    method: 'POST',
    url: '/login',
    payload: data
  }
  server.inject(option, (res) => {

    const result = JSON.parse(res.payload)
    t.equal(result.statusCode, 401, 'Get status code correctly')
    t.equal(result.message, 'Wait until the admin approved your request', 'Get error message successfully')
    t.end()
  })
})
test('POST/login: with correct pass&email | ADMIN approved', (t) => {
  const data = {
    email: 'approvedAdmin@gmail.com',// from db.test.js line:100
    password: 'approvedAdmin'// from db.test.js line:99
  }
  const option = {
    method: 'POST',
    url: '/login',
    payload: data
  }
  server.inject(option, (res) => {
    const result = JSON.parse(res.payload)
    t.equal(res.statusCode, 200, 'Get status code correctly')
    t.equal(result.message, 'redirect to admin page', 'Get error message successfully')
    t.end()
  })
})
test('POST/login: with correct pass&email | SUPER ADMIN approved', (t) => {
  const data = {
    email: 'superAdmin@gmail.com',// from db.test.js line:109
    password: 'superAdmin'// from db.test.js line:108
  }
  const option = {
    method: 'POST',
    url: '/login',
    payload: data
  }
  server.inject(option, (res) => {
    const result = JSON.parse(res.payload)
    t.equal(res.statusCode, 200, 'Get status code correctly')
    t.equal(result.message, 'redirect to superAdmin page', 'Get error message successfully')
    t.end()
    // eslint-disable-next-line no-console
    console.log('***************** Create Trip TEST****************************');
  })
})
