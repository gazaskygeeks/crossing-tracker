const dbutils = require('./dbutils.js');

function gettripbytime(data, cb) {

  const query = `SELECT
  trip_id,location_from_id,
  location_to_id,date,pass_point_time,
  passing_by,user_id,available_seats
  From trip
  WHERE
  user_id=$1
  AND
  time=$2
  AND
  date=$3`;
  dbutils.runQuery(query, [data.user_id, data.time, data.tripdate], cb);
}

function createtrip(data, cb) {
  data = JSON.parse(data);
  const query = `INSERT INTO trip
  (
  location_from_id,
  location_to_id,
  time,
  date,
  pass_point_time,
  passing_by,
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
  $7,
  $8
)
`;
  dbutils.runQuery(
    query, [
      data.location_from,
      data.location_to,
      data.time,
      data.tripdate,
      data.pass_point_time,
      data.passing_by,
      data.seatavailable,
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
  id,user_id,trip_id
  From usertrip
  WHERE
  user_id=$1
  AND
   trip_id=$2`;
  dbutils.runQuery(query, data, cb);
}

function gettripbyuserid(data, cb) {
  const query = `SELECT
  trip_id,location_from_id,
  location_to_id,date,pass_point_time,
  passing_by,user_id,available_seats
  From trip trip
  WHERE
  user_id=$1`;
  dbutils.runQuery(query, [data.user_id], cb);
}

function getusertripbyuserid(data, cb) {
  const query = 'SELECT id,user_id,trip_id From usertrip WHERE user_id=$1';
  dbutils.runQuery(query, [data.user_id], cb);
}


function gettripbytripid(data, cb) {
  const query = `SELECT SELECT
  trip_id,location_from_id,
  location_to_id,date,pass_point_time,
  passing_by,user_id,available_seats
  From trip WHERE trip_id=$1`;
  dbutils.runQuery(query, [data.trip_id], cb);
}

function getusertripbytripid(data, cb) {
  const query = `SELECT
   id,user_id,trip_id
   From usertrip
   WHERE trip_id=$1`;
  dbutils.runQuery(query, [data.trip_id], cb);
}


function getTripeByDate(date, cb) {
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

function getTripeByid(data, cb) {
  const query = `
    select
      trip.available_seats,
      trip.trip_id,
      trip.time,
      trip.date,
      trip.pass_point_time,
      trip.passing_by,
      trip.user_id,
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
  dbutils.runQuery(query, [data], cb);
}
module.exports = {
  gettripbytime: gettripbytime,
  createtrip: createtrip,
  gettripbyuserid: gettripbyuserid,
  getTripeByDate: getTripeByDate,
  getTripeByid: getTripeByid,
  getusertripbyuserid:getusertripbyuserid,
  gettripbytripid: gettripbytripid,
  getusertripbytripid: getusertripbytripid,
  addtripuser: addtripuser,
  getusertripbytripisuserid: getusertripbytripisuserid,
}
