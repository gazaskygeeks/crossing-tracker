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
  `
  client.query(tables, cb);
}

function runQuery(query, data, cb) {
  client.query(query, data, cb)
}

module.exports = {
  runMigrate,
  runQuery
}
