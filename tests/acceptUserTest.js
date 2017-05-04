const test = require('tape');
const server= require('../backend/server.js');
const dbutils = require('../database/dbutils.js');

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
    var data = {email:'alaakhattab92@gmail.com'}
    var option = {
      method: 'POST',
      url: '/acceptuser',
      payload: data,
      headers:{
        cookie:'sid='+t3
      }
    }
    server.inject(option,(response)=>{
      const res = JSON.parse(response.payload);
      t.equal(res.er,null,'email sent without any errors')
      t.equal(res.message,'accept registration','recieve confirmation message successfully')
      //t.equal(res.info.rejected.length,0,'email sent successfully')
      const query='SELECT approved FROM USERS WHERE email=$1';
      const condition = ['alaakhattab92@gmail.com']
      dbutils.runQuery(query,condition,(err,result)=>{
        t.equal(result.rows[0].approved,1,'change approve user status successfully')
        t.end();
      })
    })
  })
})
test('POST /acceptUser without ADMIN email: should reject the access to this action',(t)=>{
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
    const data ={email:'alaakhattab92@gmail.com'}
    var option = {
      method: 'POST',
      url: '/acceptuser',
      payload:data,
      headers:{
        cookie:'sid='+t3
      }
    }
    server.inject(option,(response)=>{
      const result = JSON.parse(response.payload)
      t.equal(result.message,'You are not admin','get the correct message')
      t.equal(result.statusCode,401,'get statusCode correctly')
      t.end()
      // eslint-disable-next-line no-console
      console.log('************************ Reject User Test********************');
    })
  })
})
