const dbutils = require('./dbutils.js');

function gettripbytime(data, cb) {

  const query = `SELECT
  trip_id,location_from_id,
  location_to_id,date,
  details,user_id,available_seats
  From trip
  WHERE
  user_id=$1
  AND
  time=$2
  AND
  date=$3`;
  dbutils.runQuery(query, [data.user_id, data.time, data.tripdate], cb);
}
function deleteusertrip(data,cb){
  const query =`DELETE FROM
  usertrip
  where
  user_id=$1
  AND
  trip_id=$2
`;
  dbutils.runQuery(query, [data.user_id,data.trip_id], cb);

}
function createtrip(data, cb) {
  const query = `INSERT INTO trip
  (
  location_from_id,
  location_to_id,
  time,
  date,
  details,
  available_seats,
  user_id
)
values
(
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7
) RETURNING trip_id
`;
  dbutils.runQuery(
    query, [
      data.location_from,
      data.location_to,
      data.time,
      data.tripdate,
      data.details,
      data.available_seats,
      data.user_id
    ], cb);
}

function addtripuser(data,cb){
  const usertripQuery = `INSERT INTO  usertrip
  (
    user_id ,
    trip_id
  )VALUES
  (
    $1,$2
  )
  ;`;
  dbutils.runQuery(usertripQuery, data, cb);
}

function getusertripbytripisuserid(data, cb) {

  const query = `SELECT
  id,user_id,trip_id,user_approved
  From usertrip
  WHERE
  user_id=$1
  AND
   trip_id=$2`;

  dbutils.runQuery(query, data, cb);
}

function gettripbyuserid(data, cb) {
  const query = `SELECT trip.trip_id,
  trip.date,
  trip.time,
  trip.details,
  trip.available_seats,
  l.location_name as location_from,
  (select location_name from location where
  location_id=trip.location_to_id) as location_to  FROM
  trip , location l where user_id=$1
  and trip.location_from_id=l.location_id
  and trip_status=0`;
  dbutils.runQuery(query, [data], cb);
}
function getJoinedTrip(data,cb){
  const query = `SELECT trip.trip_id,
  trip.date,
  trip.time,
  trip.details,
  trip.available_seats,
  l.location_name as location_from,
  u.username,
  u.email,
  u.phone,
  (select location_name from location where
  location_id=trip.location_to_id) as location_to  FROM
  trip , location l, users u where trip_id=$1 and
  u.user_id=trip.user_id
  and trip.location_from_id=l.location_id`;
  dbutils.runQuery(query, [data], cb);
}

function getusertripbyuserid(data, cb) {
  const query = 'SELECT trip_id,user_approved,user_id from usertrip where user_id=$1 and user_approved=1';
  dbutils.runQuery(query, [data], cb);
}

function getJoinedUser(data, cb) {
  const query = `select trip.trip_id,
    trip.date,
    trip.user_id,
    u.user_id,
    u.username,
    u.email,
    u.phone,
    o.org_name,
    d.user_approved
    from trip
    INNER JOIN usertrip d
    on trip.trip_id=d.trip_id
    INNER JOIN users u
    on  d.user_id=u.user_id
    INNER JOIN org  o
    on o.org_id=u.org_id
    where trip.trip_id=$1 and
    u.user_id in (SELECT user_id   from usertrip where trip_id=$1)
    and u.org_id = o.org_id and d.user_approved = 0 `;
  dbutils.runQuery(query, data, cb);
}

function getseats(data, cb) {
  const query = `SELECT available_seats
  From trip WHERE trip_id=$1`;
  dbutils.runQuery(query, [data], cb);
}
function getUserIdByTripId(data, cb){
  const query = `SELECT user_id
  From trip WHERE trip_id=$1`;
  dbutils.runQuery(query, [data], cb);
}

function getusertripbytripid(data, cb) {
  const query = `SELECT
   id,user_id,trip_id,user_approved
   From usertrip
   WHERE trip_id=$1`;
  dbutils.runQuery(query, [data], cb);
}
function updatetrip(data, cb) {

  const query = `UPDATE trip
   SET
   location_from_id=$1,
   location_to_id=$2,
   time=$3,
   date=$4,
   details=$5,
   available_seats=$6
   WHERE trip_id=$7`;
  dbutils.runQuery(
    query,
    [
      data.location_from,
      data.location_to,
      data.time,
      data.tripdate,
      data.details,
      data.available_seats,
      data.trip_id
    ]
    , cb);
}
function updateseats(data, cb) {

  const query = `UPDATE trip
   SET
   available_seats=$1
   WHERE trip_id=$2`;
  dbutils.runQuery(
    query,
    [
      data.available_seats,
      data.trip_id
    ]
    , cb);
}
function updateStatus(data, cb) {

  const query = `UPDATE usertrip
   SET
   user_approved=$2
   WHERE trip_id=$3
   AND user_id=$1`;
  dbutils.runQuery(
    query,
    data
    , cb);
}



function getTripByDate(date, cb) {
  const query = `
  select
    trip.available_seats,
    trip.trip_id,
    trip.time,
    trip.date,
    l.location_name as location_from,
    (select location_name from location where
    location_id=trip.location_to_id) as location_to
  from trip, location l
  where date=$1
  and trip.location_from_id=l.location_id
  `;

  dbutils.runQuery(query, [date], cb)
}
function getTripByTime(id, cb) {
  const query = `
  select
    trip.available_seats,
    trip.trip_id,
    trip.time,
    trip.date,
    l.location_name as location_from,
    (select location_name from location where
    location_id=trip.location_to_id) as location_to
  from trip, location l
  where trip_id=$1
  and trip.location_from_id=l.location_id
  `;

  dbutils.runQuery(query, [id], cb)
}

function getTripByid(data, cb) {
  const query = `
    select
      trip.available_seats,
      trip.trip_id,
      trip.time,
      trip.date,
      trip.details,
      trip.user_id,
      trip.location_to_id,
      trip.location_from_id,
      l.location_name as location_from,
      u.user_id,
      u.username,
      u.email,
      u.phone,
      u.org_id,
      o.org_id,
      o.org_name,
      (select location_name from location where
      location_id=trip.location_to_id) as location_to
      from trip, location l , users u, org o
      where trip.trip_id=$1 and u.user_id = trip.user_id
      and trip.location_from_id=l.location_id and u.org_id = o.org_id
    `;
  dbutils.runQuery(query, [data.trip_id], cb);
}
function getAllTrips(cb) {
  const query = 'SELECT trip_id,date,time from trip;';
  dbutils.runQuery(query,cb)
}
function getTripFromTo(data,cb) {
  const query = 'SELECT trip_id,date,time from trip where location_from_id=$1 and location_to_id=$2 ;';
  dbutils.runQuery(query,data,cb)
}
function getTripFrom(data,cb) {
  const query = 'SELECT trip_id,date,time from trip where location_from_id=$1 ;';
  dbutils.runQuery(query,data,cb)
}
function getTripTo(data,cb) {
  const query = 'SELECT trip_id,date,time from trip where location_to_id=$1;';
  dbutils.runQuery(query,data,cb)
}

function getAllJionedUserIdByTripId(data,cb){
  const query = 'SELECT user_id  from usertrip where trip_id = $1 AND user_approved = 1;';
  dbutils.runQuery(query,[data],cb)
}

function cancelTrip(data,cb){
  const query = 'UPDATE trip set trip_status=1 where trip_id=$1;';
  dbutils.runQuery(query,[data],cb)
}

function selectusersbytripid(data, cb){
  const query = 'SELECT user_id  from usertrip where trip_id = $1;';
  dbutils.runQuery(query,[data],cb)
}
module.exports = {
  getTripFromTo,
  getTripFrom,
  getTripTo,
  gettripbytime: gettripbytime,
  createtrip: createtrip,
  gettripbyuserid: gettripbyuserid,
  getTripByDate: getTripByDate,
  getTripByid: getTripByid,
  getusertripbyuserid:getusertripbyuserid,
  getseats: getseats,
  getusertripbytripid: getusertripbytripid,
  addtripuser: addtripuser,
  getusertripbytripisuserid: getusertripbytripisuserid,
  updatetrip:updatetrip,
  getJoinedTrip:getJoinedTrip,
  getUserIdByTripId:getUserIdByTripId,
  deleteusertrip:deleteusertrip,
  updateseats:updateseats,
  updateStatus:updateStatus,
  getJoinedUser:getJoinedUser,
  getAllTrips : getAllTrips,
  getAllJionedUserIdByTripId,
  getTripByTime,
  cancelTrip,
  selectusersbytripid
}
