const test = require('tape');
const server= require('../backend/server.js');
const client = require('../database/config.js');

test('POST /acceptUser : should approve user and send confirmation email',(t)=>{
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
      method: 'POST',
      url: '/user',
      payload:'{"email":"alaakhattab92@gmail.com"}',
      headers:{
        cookie:'sid='+t3
      }
    }
    server.inject(option,(response)=>{
      const res = JSON.parse(response.payload);
      t.equal(res.er,null,'email sent successfully')
      t.equal(res.message,'confirmation success','email sent successfully')

      client.end();
      server.stop(t.end());

    })

  })

})
