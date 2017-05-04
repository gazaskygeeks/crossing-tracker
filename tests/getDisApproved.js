const server = require('../backend/server.js');
const client = require('../database/config.js');
const test = require('tape');
test('GET/disApproved: should return all dis approved useres ', (t) => {
  const adminInfo = {
    email: 'approvedAdmin@gmail.com',
    password: 'approvedAdmin'
  }
  const loginOption = {
    method: 'POST',
    url: '/login',
    payload: adminInfo
  }
  server.inject(loginOption, (res) => {
    var cookies = res.request.response.headers['set-cookie']
    var t1 = cookies[0].split(';');
    var t2 = t1[0].split('=');
    var t3 = t2[1];
    var option = {
      method: 'GET',
      url: '/disApproved',
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (res) => {
      const data = JSON.parse(res.payload)
      t.equal(data.result.length > 0, true, 'all returned users are disApproved');
      t.equal(res.statusCode, 200, 'get statusCode successfully')
      t.end()
    })
  })
})
test('GET /disApproved without ADMIN email: should reject the access to this action',(t)=>{
  const adminInfo ={
    email:'approvedUser@gmail.com',
    password:'approvedUser'
  }
  const loginOption={
    method:'POST',
    url:'/login',
    payload:adminInfo
  }
  server.inject(loginOption,(res)=>{
    var cookies=  res.request.response.headers['set-cookie']
    var t1 =cookies[0].split(';');
    var t2 =t1[0].split('=');
    var t3 = t2[1];
    var option = {
      method: 'GET',
      url: '/disApproved',
      headers:{
        cookie:'sid='+t3
      }
    }
    server.inject(option,(response)=>{
      const result = JSON.parse(response.payload)
      t.equal(result.message,'You are not admin','get the correct message')
      t.equal(result.statusCode,401,'get statusCode correctly')
      t.end();
      // eslint-disable-next-line no-console
      console.log('***************** Join Trip Test**************************');
    })
  })
})
