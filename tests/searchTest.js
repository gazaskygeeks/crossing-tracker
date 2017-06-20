const test = require('tape');
const server = require('../backend/server.js');
test('POST /search : Test search exist trip', (t) => {

  var data1 = {
    email: 'approvedUser@gmail.com', // from db.test.js line:82
    password: 'approvedUser' // from db.test.js line:81
  }
  var option1 = {
    method: 'POST',
    url: '/login',
    payload: data1
  }
  server.inject(option1, (res) => {
    const data={from:2,to:1}
    var cookies = res.request.response.headers['set-cookie']
    var t1 = cookies[0].split(';');
    var t2 = t1[0].split('=');
    var t3 = t2[1];
    var option = {
      method: 'POST',
      url: '/search',
      payload:data ,
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (res) => {
      var result = JSON.parse(res.payload)
      t.deepEqual(result.filter[0].date, '2017-04-21', 'Trip Found');
      t.end();
    })
  })
})
test('POST /search : Test search without parms ', (t) => {

  var data1 = {
    email: 'approvedUser@gmail.com', // from db.test.js line:82
    password: 'approvedUser' // from db.test.js line:81
  }
  var option1 = {
    method: 'POST',
    url: '/login',
    payload: data1
  }
  server.inject(option1, (res) => {
    var cookies = res.request.response.headers['set-cookie']
    var t1 = cookies[0].split(';');
    var t2 = t1[0].split('=');
    var t3 = t2[1];
    var option = {
      method: 'POST',
      url: '/search',
      payload:'' ,
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (res) => {
      t.deepEqual(res.statusCode, 400, 'not Authorize');
      t.end();
    })
  })
})
test('POST /search : Test search with empty parms ', (t) => {

  var data1 = {
    email: 'approvedUser@gmail.com', // from db.test.js line:82
    password: 'approvedUser' // from db.test.js line:81
  }
  var option1 = {
    method: 'POST',
    url: '/login',
    payload: data1
  }
  server.inject(option1, (res) => {
    var cookies = res.request.response.headers['set-cookie']
    const data = {from:'',to:''}
    var t1 = cookies[0].split(';');
    var t2 = t1[0].split('=');
    var t3 = t2[1];
    var option = {
      method: 'POST',
      url: '/search',
      payload:data ,
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (res) => {
      var result = JSON.parse(res.payload)
      t.equal(result.filter[0].date, '2017-04-21', 'all trip return');
      t.end();
    })
  })
})
test('POST /search : Test search with only from ', (t) => {
  var data1 = {
    email: 'approvedUser@gmail.com', // from db.test.js line:82
    password: 'approvedUser' // from db.test.js line:81
  }
  var option1 = {
    method: 'POST',
    url: '/login',
    payload: data1
  }
  server.inject(option1, (res) => {
    var cookies = res.request.response.headers['set-cookie']
    const data = {from:'2',to:''}
    var t1 = cookies[0].split(';');
    var t2 = t1[0].split('=');
    var t3 = t2[1];
    var option = {
      method: 'POST',
      url: '/search',
      payload:data ,
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (res) => {
      var result = JSON.parse(res.payload)
      t.deepEqual(result.filter[0].date, '2017-04-21', 'trip with id=2 returned');
      t.end();
    })
  })
})

test('POST /search : Test search with only to ', (t) => {
  var data1 = {
    email: 'approvedUser@gmail.com', // from db.test.js line:82
    password: 'approvedUser' // from db.test.js line:81
  }
  var option1 = {
    method: 'POST',
    url: '/login',
    payload: data1
  }
  server.inject(option1, (res) => {
    var cookies = res.request.response.headers['set-cookie']
    const data = {from:'',to:'1'}
    var t1 = cookies[0].split(';');
    var t2 = t1[0].split('=');
    var t3 = t2[1];
    var option = {
      method: 'POST',
      url: '/search',
      payload:data ,
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (res) => {
      var result = JSON.parse(res.payload)
      t.deepEqual(result.filter[0].date, '2017-04-21', 'trip with trip id=1  returned');
      t.end();
    })
  })
})

test('POST /search : Test search with wrong from to ', (t) => {
  var data1 = {
    email: 'approvedUser@gmail.com', // from db.test.js line:82
    password: 'approvedUser' // from db.test.js line:81
  }
  var option1 = {
    method: 'POST',
    url: '/login',
    payload: data1
  }
  server.inject(option1, (res) => {
    var cookies = res.request.response.headers['set-cookie']
    const data = {from:'4',to:'2',date:''}
    var t1 = cookies[0].split(';');
    var t2 = t1[0].split('=');
    var t3 = t2[1];
    var option = {
      method: 'POST',
      url: '/search',
      payload:data ,
      headers: {
        cookie: 'sid=' + t3
      }
    }
    server.inject(option, (res) => {
      var result = JSON.parse(res.payload)
      t.deepEqual(result.filter, [], 'no trip returned');
      t.end();
      // eslint-disable-next-line no-console
      console.log('*****************Cancel event TEST****************************');

    })

  })
})
