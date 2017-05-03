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

  const query = 'SELECT * From usertrip WHERE user_id=$1 AND trip_id=$2';
  dbutils.runQuery(query, data, cb);
}

function gettripbyuserid(data, cb) {
  const query = 'SELECT * From trip WHERE user_id=$1';
  dbutils.runQuery(query, [data.user_id], cb);
}

function gettripbytripid(data, cb) {
  const query = 'SELECT * From trip WHERE trip_id=$1';
  dbutils.runQuery(query, [data.trip_id], cb);
}

function getusertripbytripid(data, cb) {
  const query = 'SELECT * From usertrip WHERE trip_id=$1';
  dbutils.runQuery(query, [data.trip_id], cb);
}


function getTripeByDate(date, cb) {
  const query = 'SELECT * FROM trip WHERE date=$1'
  dbutils.runQuery(query, [date], cb)
}
module.exports = {
  gettripbytime: gettripbytime,
  createtrip: createtrip,
  gettripbyuserid: gettripbyuserid,
  getTripeByDate: getTripeByDate,
  gettripbytripid: gettripbytripid,
  getusertripbytripid: getusertripbytripid,
  addtripuser: addtripuser,
  getusertripbytripisuserid: getusertripbytripisuserid

}
