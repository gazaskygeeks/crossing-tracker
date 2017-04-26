const test = require('tape');
const server = require('../backend/server.js');
const client = require('../database/config.js');
test('POST /createtrip : test if recive the the correct Data', (t) => {

  const data ={
    user_id:1,
    tripdate:'01012017',
    time:'01:01 AM',
    location_from_id:1,
    location_to_id:2,
    passingby:'Mohammed',
    passpointtime:'01:02 AM',
    seatavailable:1,
  }
  const option = {
    method: 'POST',
    url: '/createtrip',
    payload:data
  }
  server.inject(option, (response) => {
    t.equal(typeof response.request.payload,'object', 'data is object')
    server.inject(option, (response) => {
      t.deepEqual(response.request.payload,data, 'Server get the correct data')
      t.end();
    })
  })
})
test('POST /createtrip : test data fields', (t) => {
  let data ={
  }
  let option = {
    method: 'POST',
    url: '/createtrip',
    payload:data
  }
  server.inject(option, (response) => {

    t.equal(response.statusCode, 400, 'data fields is required')

    data ={
      user_id:'a',
      tripdate:'01012017',
      time:'01:01 AM',
      location_from_id:1,
      location_to_id:2,
      passingby:'Mohammed',
      passpointtime:'01:02 AM',
      seatavailable:1,
    }
    option = {
      method: 'POST',
      url: '/createtrip',
      payload:data
    }
    server.inject(option, (response) => {
      t.equal(response.statusCode, 400, 'check user_id')
      t.end();
    })
  })

})

test('POST /createtrip :check duplicate trip', (t) => {
  let data ={
  }
  let option = {
    method: 'POST',
    url: '/createtrip',
    payload:data
  }
  server.inject(option, (response) => {

    t.equal(response.statusCode, 400, 'data fields is required')

    data ={
      user_id:'1',
      tripdate:'01012017',
      time:'01:01 AM',
      location_from_id:1,
      location_to_id:2,
      passingby:'Mohammed',
      passpointtime:'01:02 AM',
      seatavailable:1,
    }
    option = {
      method: 'POST',
      url: '/createtrip',
      payload:data
    }
    server.inject(option, (response) => {
      t.equal(response.statusCode, 400, 'trip already exists')
      client.end();
      server.stop(t.end());
    })
  })
})
