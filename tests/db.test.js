const dbutils = require('../database/dbutils.js');
//const client = require('../database/config.js');
const hash = require('../backend/utils.js');
const test = require('tape');
console.log('************************* DataBase Test*************************');
test('create tables ', (t) => {
  dbutils.runMigrate((err) => {
    t.notOk(err, 'create table successfully')
    t.end()
  })
})
test('insert data into ORGANIZATION table ', (t) => {
  const query = 'INSERT INTO org (org_name) values ($1)'
  const data = ['geeks']
  dbutils.runQuery(query, data, (err) => {
    t.notOk(err, 'insert data into ORGANIZATION table successfully')
    t.end()
  })
})
test('select  data from ORGANIZATION table ', (t) => {
  const query = 'SELECT * FROM org WHERE org_name=$1'
  const data = ['geeks'] //from previous insertion
  dbutils.runQuery(query, data, (err, result) => {
    t.notOk(err, 'select data from ORGANIZATION table successfully')
    t.notEqual(result.rows.length,0,'ok')
    t.end()
  })
})
test('insert data into LOCATION table ', (t) => {
  const query = 'INSERT INTO location (location_name) values ($1)'
  const data = ['gaza']
  dbutils.runQuery(query, data, (err) => {
    t.notOk(err, 'insert data into LOCATION table successfully')
    t.end()
  })
})
test('select  data from LOCATION table ', (t) => {
  const query = 'SELECT * FROM location WHERE location_name=$1'
  const data = ['gaza'] //from previous insertion
  dbutils.runQuery(query, data, (err, result) => {
    t.notOk(err, 'select data from LOCATION table successfully')
    t.notEqual(result.rows.length,0,'ok')
    t.end()
  })
})
test('insert data into USERS table with UNAPPROVED user', (t) => {
  var data=[];
  const query = `insert into users
   (username,
    email,
    password,
    phone,
    org_id,
    user_type,
    approved)
    values ($1, $2, $3, $4, $5, $6,$7)`
  hash('123654',(err,result)=>{
    data = ['test',
      'test@gmail.com',
      result,
      '1597536',
      '1',
      'user',
      '0'
    ]
    dbutils.runQuery(query, data, (err) => {
      t.notOk(err, 'insert data into USERS table successfully')
      t.end()
    })
  })
})

test('insert data into USERS table with approved user ', (t) => {
  var data=[];
  const query = `insert into users
   (username,
    email,
    password,
    phone,
    org_id,
    user_type,
    approved)
    values ($1, $2, $3, $4, $5, $6,$7)`
  hash('1236541',(err,result)=>{
    data = ['test1',
      'test1@gmail.com',
      result,
      '15975361',
      '1',
      'user',
      '1'
    ]
    dbutils.runQuery(query, data, (err) => {
      t.notOk(err, 'insert data into USERS table successfully')
      t.end()
    })
  })
})
test('select  data from USERS table ', (t) => {
  const query = 'SELECT * FROM users WHERE username=$1'
  const data = ['test'] //from previous insertion
  dbutils.runQuery(query, data, (err, result) => {
    t.notOk(err, 'select data from USERS table successfully')
    t.notEqual(result.rows.length,0,'ok')
    t.end()
    console.log('***************** Login TEST********************');

  })
})
