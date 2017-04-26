const dbutils = require('./dbutils.js');

function gettripbytime (data,cb){
      
  const query = 'SELECT * From trip WHERE user_id=$1 AND time=$2 AND date=$3';
  dbutils.select(query,[data.user_id,data.time,data.tripdate],cb);
}

function createtrip (data,cb) {


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
  dbutils.insert(
    query,[
      data.location_from_id,
      data.location_to_id,
      data.time,
      data.tripdate,
      data.user_id,
      data.seatavailable
    ]
    ,cb);
}
module.exports = {
  gettripbytime:gettripbytime,
  createtrip:createtrip

}
