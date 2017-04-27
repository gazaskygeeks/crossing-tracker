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
    location_from_id ,
    location_to_id,
    time,
    date,
    user_id,
    available_seats
  ) VALUES
 (
   $1,$2,$3,$4,$5,$6
 );`
const trip = ['1','2','01:01 AM','08082017','1','3'];
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
  trip,
  usertripQuery,
  usertrip
}
