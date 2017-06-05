const test = require('tape');
const server = require('../backend/server.js');
const user = require('../database/userhelpers.js');
test('POST /forgetpassword : route exist', (t) => {

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

test('POST /forgetpassword : test without params', (t) => {

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

test('POST /forgetpassword : test wrong email', (t) => {

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

test('POST /forgetpassword : test correct email', (t) => {

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

  })
})
test('POST /reset : test reset page fake user_id ', (t) => {

  var option = {
    method: 'GET',
    url: '/reset/?user_id=99&token=',
  }
  server.inject(option, (res) => {
    t.equal(res.result.msg,
       'Link not valid',
        'ok ! user not found   ');
    t.end();
  })
})
test('POST /reset : test reset page  empty token and real user', (t) => {

  var option = {
    method: 'GET',
    url: '/reset/?user_id=7&token=',
  }
  server.inject(option, (res) => {
    t.equal(res.result.msg,
       'You Cant reset password',
        'ok ! token empty ');
    t.end();
  })
})
test('POST /reset : test reset page fake token and real user', (t) => {

  var option = {
    method: 'GET',
    url: '/reset/?user_id=7&token=aaaaaaaaa',
  }
  server.inject(option, (res) => {
    t.equal(res.result.msg,
       'You Cant reset password',
        'ok ! token fake');
    t.end();
  })
})
test('GET /reset : test reset page real user & real token', (t) => {
  const option = {
    method: 'POST',
    url: '/forget',
    payload:{email:'approvedAdmin@gmail.com'}
  }
  server.inject(option, (res) => {

    user.getToken(7,(error,result)=>{
      const   token=result.rows[0].resetpasswordtoken;
      const option1 = {
        method: 'GET',
        url: '/reset/?user_id=7&token='+token,
      }
      server.inject(option1, (res) => {
        t.equal(res.result.msg,
           'You Can reset password',
            'ok ! You Can reset password   ');
        t.end();

      })
    })
  })

})
test('POST /reset : test reset page fake user_id ', (t) => {

  const option1 = {
    method: 'POST',
    url: '/reset',
    payload:{
      user_id:99,
      token:'',
      password:''
    }
  }
  server.inject(option1, (res) => {
    t.equal(res.result.msg,
       'Somthing Error',
        'ok ! Fake user not pass');
    t.end();

  })
})
test('POST /reset : test reset page real user empty token ', (t) => {

  const option1 = {
    method: 'POST',
    url: '/reset',
    payload:{
      user_id:7,
      token:'',
      password:''
    }
  }
  server.inject(option1, (res) => {
    t.equal(res.result.msg,
       'Somthing Error',
        'ok ! empty token not pass');
    t.end();

  })
})

test('POST /reset : test reset page real user empty password ', (t) => {

  const option1 = {
    method: 'POST',
    url: '/reset',
    payload:{
      user_id:7,
      token:'213123',
      password:''
    }
  }
  server.inject(option1, (res) => {
    t.equal(res.result.msg,
       'Somthing Error',
        'ok ! empty password not pass');
    t.end();

  })
})
test('POST /reset : test reset page real user fake token ', (t) => {

  const option1 = {
    method: 'POST',
    url: '/reset',
    payload:{
      user_id:7,
      token:'213123',
      password:'1'
    }
  }
  server.inject(option1, (res) => {
    t.equal(res.result.msg,
       'You Cant reset password',
        'ok ! fake token not pass');
    t.end();

  })
})
test('POST /reset : test reset page test short password ', (t) => {
  const option = {
    method: 'POST',
    url: '/forget',
    payload:{email:'approvedAdmin@gmail.com'}
  }
  server.inject(option, (res) => {

    user.getToken(7,(error,result)=>{
      const   token=result.rows[0].resetpasswordtoken;

      const option1= {
        method: 'POST',
        url: '/reset',
        payload:{
          user_id:7,
          token:token,
          password:'1'
        }
      }
      server.inject(option1, (res) => {
        t.equal(res.result.msg,
           'Password too short !',
            'ok ! passowrd should be min 6 charactars ');
        t.end();

      })
    })
  })
})
test('POST /reset : test reset page pass all requires ', (t) => {
  const option = {
    method: 'POST',
    url: '/forget',
    payload:{email:'approvedAdmin@gmail.com'}
  }
  server.inject(option, (res) => {

    user.getToken(7,(error,result)=>{
      const   token=result.rows[0].resetpasswordtoken;

      const option1= {
        method: 'POST',
        url: '/reset',
        payload:{
          user_id:7,
          token:token,
          password:'approvedAdmin'
        }
      }
      server.inject(option1, (res) => {
        t.equal(res.result.msg,
           'Success! Your password has been changed.',
            'ok ! Change passowrd Successfuly ');
        t.end();

      })
    })
  })
})
test('POST /reset : test reset page test change passowrd after change from  same link', (t) => {
  const option = {
    method: 'POST',
    url: '/forget',
    payload:{email:'approvedAdmin@gmail.com'}
  }
  server.inject(option, (res) => {

    user.getToken(7,(error,result)=>{
      const   token=result.rows[0].resetpasswordtoken;

      const option1= {
        method: 'POST',
        url: '/reset',
        payload:{
          user_id:7,
          token:token,
          password:'approvedAdmin'
        }
      }
      server.inject(option1, (res) => {

        const option2= {
          method: 'POST',
          url: '/reset',
          payload:{
            user_id:7,
            token:token,
            password:'approvedAdmin'
          }
        }
        server.inject(option2, (res) => {
          t.equal(res.result.msg,
             'Link not valid',
              'Link only for one use');
          t.end();
        })
      })
    })
  })
  // eslint-disable-next-line no-console
  console.log('*****************SearchTest TEST****************************');
})
