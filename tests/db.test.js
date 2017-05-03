const dbutils = require('../database/dbutils.js');
const data = require('../scripts/sqltest.js');
const utiles = require('../backend/utils.js');
const test = require('tape');
// eslint-disable-next-line no-console
console.log('************************* DataBase Test**********************************');
test('create tables ', (t) => {
  dbutils.runMigrate((err) => {

    t.notOk(err, 'create table successfully')
    t.end()
  })
})
test('insert data into ORGANIZATION table ', (t) => {
  dbutils.runQuery(data.orgQuery, data.org, (err) => {
    t.notOk(err, 'insert data into ORGANIZATION table successfully')
    t.end()
  })
})
test('select  data from ORGANIZATION table ', (t) => {
  const query = 'SELECT org_id,org_name FROM org WHERE org_name=$1'
  dbutils.runQuery(query, data.org, (err, result) => {
    t.notOk(err, 'select data from ORGANIZATION table successfully')
    t.notEqual(result.rows.length, 0, 'ok')
    t.end()
  })
})
test('insert data into LOCATION table ', (t) => {
  dbutils.runQuery(data.locationQuery, data.firstLocation, (err) => {
    t.notOk(err, 'insert data into LOCATION table successfully')
    t.end()
  })
})
test('insert another data into LOCATION table ', (t) => {
  dbutils.runQuery(data.locationQuery, data.secondLocation, (err) => {
    t.notOk(err, 'insert data into LOCATION table successfully')
    t.end()
  })
})
test('select  data from LOCATION table ', (t) => {
  const query = 'SELECT location_id,location_name FROM location WHERE location_name=$1'
  dbutils.runQuery(query, data.secondLocation, (err, result) => {
    t.notOk(err, 'select data from LOCATION table successfully')
    t.notEqual(result.rows.length, 0, 'ok')
    t.end()
  })
})
test('insert superAdmin into USERTYPE table ', (t) => {
  dbutils.runQuery(data.userTypeQuery, data.superAdmin, (err) => {
    t.notOk(err, 'insert data into USERTYPE table successfully')
    t.end()
  })
})
test('insert admin into USERTYPE table ', (t) => {
  dbutils.runQuery(data.userTypeQuery, data.admin, (err) => {
    t.notOk(err, 'insert data into USERTYPE table successfully')
    t.end()
  })
})
test('insert normalUser into USERTYPE table ', (t) => {
  dbutils.runQuery(data.userTypeQuery, data.normalUser, (err) => {
    t.notOk(err, 'insert data into USERTYPE table successfully')
    t.end()
  })
})
test('insert data into USERS table with approved user ', (t) => {
  dbutils.runQuery(data.userQuery, data.users, (err) => {
    t.notOk(err, 'insert data into USERS table successfully')
    t.end()
  })
})
test('insert normalUser AND not approved into USERS table ', (t) => {
  utiles.hash('notApprovedUser', (err, hashPass) => {
    const user = ['notApprovedUser', 'alaakhattab92@gmail.com', hashPass, '059984253', '1', '3', '0']
    dbutils.runQuery(data.userQuery, user, (err) => {
      t.notOk(err, 'insert data into USERS table successfully')
      t.end()
    })
  })
})
test('insert normalUser AND approved into USERS table ', (t) => {
  utiles.hash('approvedUser', (err, hashPass) => {
    const user = ['approvedUser', 'approvedUser@gmail.com', hashPass, '059984253', '1', '3', '1']
    dbutils.runQuery(data.userQuery, user, (err) => {
      t.notOk(err, 'insert data into USERS table successfully')
      t.end()
    })
  })
})
test('insert admin AND not approved into USERS table ', (t) => {
  utiles.hash('notApprovedAdmin', (err, hashPass) => {
    const user = ['notApprovedAdmin', 'notApprovedAdmin@gmail.com', hashPass, '059984253', '1', '2', '0']
    dbutils.runQuery(data.userQuery, user, (err) => {
      t.notOk(err, 'insert data into USERS table successfully')
      t.end()
    })
  })
})
test('insert admin AND not approved into USERS table ', (t) => {
  utiles.hash('DEFAULT', (err, hashPass) => {
    const userQuery = `INSERT INTO  users (
        username ,
        email,
        password,
        phone,
        org_id
      ) VALUES
      (
        $1,$2,$3,$4,$5
      )
      ;`;
    const user = ['DEFAULT', 'DEFAULT@gmail.com', hashPass, '059984253', '1']
    dbutils.runQuery(userQuery, user, (err) => {
      t.notOk(err, 'insert data into USERS table successfully')
      t.end()
    })
  })
})
test('insert admin AND approved into USERS table ', (t) => {
  utiles.hash('approvedAdmin', (err, hashPass) => {
    const user = ['approvedAdmin', 'approvedAdmin@gmail.com', hashPass, '059984253', '1', '2', '1']
    dbutils.runQuery(data.userQuery, user, (err) => {
      t.notOk(err, 'insert data into USERS table successfully')
      t.end()
    })
  })
})
test('insert superAdmin  into USERS table ', (t) => {
  utiles.hash('superAdmin', (err, hashPass) => {
    const user = ['superAdmin', 'superAdmin@gmail.com', hashPass, '059984253', '1', '1', '1']
    dbutils.runQuery(data.userQuery, user, (err) => {
      t.notOk(err, 'insert data into USERS table successfully')
      t.end()
    })
  })
})
test('insert trip  into trip table ', (t) => {
  dbutils.runQuery(data.tripQuery, data.trip, (err) => {
    t.notOk(err, 'insert data into USERS table successfully')
    t.end()
  })
})
test('insert data  into USERTRIP table ', (t) => {
  dbutils.runQuery(data.usertripQuery, data.usertrip, (err) => {
    t.notOk(err, 'insert data into USERS table successfully')
    t.end()
  })
})
test('select  data from USERS table ', (t) => {
  const query = 'SELECT user_id FROM users WHERE username=$1'
  const data = ['approvedUser'] //from previous insertion
  dbutils.runQuery(query, data, (err, result) => {
    t.notOk(err, 'select data from USERS table successfully')
    t.notEqual(result.rows.length, 0, 'ok')
    t.end()
    // eslint-disable-next-line no-console
    console.log('***************** Signup TEST**************************');

  })
})
