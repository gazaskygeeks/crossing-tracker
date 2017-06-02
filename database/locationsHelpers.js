const dbutils = require('./dbutils.js');

function getLocation(cb) {
  const query = 'SELECT * FROM location';
  dbutils.runQuery(query, cb);
}
function getLocationsById(data,cb) {
  const query = `select l.location_name as location_from ,
  (select location_name from location where location_id =$1) as location_to
  from location l  where location_id = $2;`;
  dbutils.runQuery(query,[data.location_to,data.location_from], cb);
}

module.exports = {
  getLocation: getLocation,
  getLocationsById
}
