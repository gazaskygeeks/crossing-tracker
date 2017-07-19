const dbutils = require('../database/dbutils.js');
const orgQuery = `INSERT INTO org
(org_name)
values
($1)
;`;
const org = ['mercyco']
const locationQuery= `INSERT INTO location
(location_name)
 VALUES
($1)
;`;
const userTypeQuery = `INSERT INTO usertype
(usertype_id,usertype)
values
($1,$2)
;`;
const superAdmin = ['1','superAdmin']
const admin = ['2','admin']
const normalUser = ['3','user']
const firstLocation = ['GAZA'];
const secondLocation = ['RAMALLAH'];
const userQuery = `INSERT INTO  users (
    username ,
    email,
    password,
    phone,
    org_id,
    user_type,
    approved
  ) VALUES
  (
    $1,$2,$3,$4,$5,$6,$7
  )
  ;`;
const users = ['admin','admin@admin.com','123456','0598287410','1','2','1'];
const tripQuery = `INSERT INTO trip (
    trip_id,
    location_from_id ,
    location_to_id,
    time,
    date,
    user_id,
    available_seats,
    duration
  ) VALUES
 (
   $1,$2,$3,$4,$5,$6,$7,$8
 );`
// const trip = ['
// 10000','1','2','01:01','2017-08-08','1','1'];
const usertripQuery =`INSERT INTO  usertrip
(
  user_id ,
  trip_id
)VALUES
(
  $1,$2
)
;`;
const usertrip = ['1','1']
var randomSeq =Math.floor(Math.random()*90000) + 10000;
const changeSequence = (cb) => {
  const query = 'ALTER SEQUENCE trip_trip_id_seq RESTART WITH '.concat(randomSeq)
  dbutils.runQuery(query,cb)
}
module.exports = {
  org,
  orgQuery,
  locationQuery,
  firstLocation,
  secondLocation,
  userQuery,
  users,
  userTypeQuery,
  superAdmin,
  admin,
  normalUser,
  tripQuery,
  changeSequence,
  usertripQuery,
  usertrip
}
