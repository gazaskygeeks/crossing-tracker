const dbutils = require('./dbutils.js');

function gettripbytime(data, cb) {

  const query = 'SELECT * From trip WHERE user_id=$1 AND time=$2 AND date=$3';
  dbutils.runQuery(query, [data.user_id, data.time, data.tripdate], cb);
}

function createtrip(data, cb) {
  const query = `INSERT INTO trip
  (
  location_from_id,
  location_to_id,
  time,
  date,
  user_id,
  available_seats
)
values
(
  $1,
  $2,
  $3,
  $4,
  $5,
  $6
)
`;
  dbutils.runQuery(
    query, [
      data.location_from_id,
      data.location_to_id,
      data.time,
      data.tripdate,
      data.user_id,
      data.seatavailable
    ], cb);
}

function gettripbyuserid(data, cb) {
  const query = 'SELECT * From trip WHERE user_id=$1';
  dbutils.runQuery(query, [data.user_id], cb);
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
module.exports = {
  gettripbytime: gettripbytime,
  createtrip: createtrip,
  gettripbyuserid: gettripbyuserid,
  getTripeByDate: getTripeByDate

}
