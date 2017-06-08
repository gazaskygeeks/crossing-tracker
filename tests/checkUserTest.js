const server = require('../backend/server.js');
const test = require('tape');
const client = require('../database/config.js');


test('GET /userType | get userType befor create a session', (t) => {
  var option = {
    method: 'GET',
    url: '/userType'
  }

  server.inject(option, (res) => {
    t.equal(res.statusCode,302, 'Not authorized');
    t.end();

  })
})

test('GET /userType : check user type as ADMIN',(t)=>{
  const adminInfo ={
    email:'approvedAdmin@gmail.com',
    password:'approvedAdmin'
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
      url: '/userType',
      headers:{
        cookie:'sid='+t3
      }
    }
    server.inject(option,(response)=>{
      t.equal(res.statusCode,200, 'get statusCode correctly');
      t.equal(response.payload,'2','recieve user type as admin successfully')
      t.end();
    })
  })
})
test('GET /userType : check user type as ADMIN',(t)=>{
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
      url: '/userType',
      headers:{
        cookie:'sid='+t3
      }
    }
    server.inject(option,(response)=>{
      t.equal(res.statusCode,200, 'get statusCode correctly');
      t.equal(response.payload,'3','recieve user type as user successfully')
      client.end()
      server.stop(t.end());
    })
  })
})
