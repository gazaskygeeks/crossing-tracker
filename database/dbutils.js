const client = require('./config.js');
const table = require('../scripts/sql.js');
function runMigrate(cb) {
  const tables = `${table.org}
  ${table.usertype}
  ${table.location}
  ${table.users}
  ${table.trip}
  ${table.usertrip}
  ${table.approvedColumn}
  ${table.trip_status}`
  client.query(tables, cb);
}
function runSequence (cb){
  client.query(table.sequence,cb)

}
function runQuery(query, data, cb) {
  client.query(query, data, cb)
}
module.exports = {
  runMigrate,
  runQuery,
  runSequence,
}
