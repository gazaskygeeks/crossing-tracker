const dbutils = require('./dbutils.js');

function gettripbytime(data, cb) {

  const query = 'SELECT * From trip WHERE user_id=$1 AND time=$2 AND date=$3';
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
      data.location_from_id,
      data.location_to_id,
      data.time,
      data.tripdate,
      data.pass_point_time,
      data.passing_by,
      data.seatavailable,
      data.user_id
    ], cb);
}

function gettripbyuserid(data, cb) {
  const query = 'SELECT * From trip WHERE user_id=$1';
  dbutils.runQuery(query, [data.user_id], cb);
}

function getTripeByDate(date, cb) {
  const query = 'SELECT * FROM trip WHERE date=$1'
  dbutils.runQuery(query, [date], cb)
}

function getTripeByid(data, cb) {
  const query = 'SELECT * From trip WHERE trip_id=$1';
  dbutils.runQuery(query, [data], cb);
}
module.exports = {
  gettripbytime: gettripbytime,
  createtrip: createtrip,
  gettripbyuserid: gettripbyuserid,
  getTripeByDate: getTripeByDate,
  getTripeByid: getTripeByid

}
