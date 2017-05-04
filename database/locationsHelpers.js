const dbutils = require('./dbutils.js');

function getLocation(cb) {
  const query = 'SELECT * FROM location';
  dbutils.runQuery(query, cb);
}

module.exports = {
  getLocation: getLocation
}
