const org = `INSERT INTO org
(org_name)
values
('mercyco')
;`;
const first_location = `INSERT INTO location
(location_name)
 VALUES
('GAZA')
;`;
const second_location = `INSERT INTO location
 (location_name)
  VALUES
  ('RAMALLAH')
  ;`;
const users = `INSERT INTO  users (
    username ,
    email,
    password,
    phone,
    org_id,
    user_type,
    approved
  ) VALUES
  (
    'admin','admin@admin.com','123456','0598287410','1','1','1'
  )
  ;`;
const trip = `INSERT INTO trip (
    location_from_id ,
    location_to_id,
    time,
    date,
    user_id,
    available_seats
  ) VALUES
 (
   '1','2','01:01 AM','08082017','1','3'
 );`
const usertrip = `INSERT INTO  usertrip
(
  user_id ,
  trip_id

)VALUES
(
  '1','1'
)
;`;
module.exports = {
  users: users,
  trip: trip,
  usertrip: usertrip,
  org: org,
  first_location: first_location,
  second_location:second_location
}
