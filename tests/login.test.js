const test = require('tape');
const server = require('../backend/server.js');
const client = require('../database/config.js');

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
    email: 'test@gmail.com',
    password: '11111111'
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
test('POST/login: with VALID email and password AND both are correct, and user type is USER but NOT APPROVED', (t) => {
  const data = {
    email: 'test@gmail.com',
    password: '123654'
  }
  const option = {
    method: 'POST',
    url: '/login',
    payload: data
  }
  console.log('test');
  server.inject(option, (res) => {
    const result = JSON.parse(res.payload)
    t.equal(result.statusCode, 401, 'Get status code correctly')
    t.equal(result.message, 'Wait until the admin approved your request', 'Get error message successfully')
    t.end()
  })

})
test('POST/login: with VALID email and password AND both are correct, and user type is USER but  APPROVED', (t) => {
  const data = {
    email: 'test1@gmail.com',
    password: '1236541'
  }
  const option = {
    method: 'POST',
    url: '/login',
    payload: data
  }
  console.log('test');
  server.inject(option, (res) => {
    const result = JSON.parse(res.payload)
    t.equal(res.statusCode, 200, 'Get status code correctly')
    t.equal(result.message, 'redirect to home page', 'Get error message successfully')
    client.end()
  })
  server.stop(t.end())
})
