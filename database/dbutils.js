
const table = require('../scripts/sql.js');

function createTable(client, cb) {
  const tables = `${table.org}
  ${table.location}
  ${table.users}
  ${table.trip}
  ${table.usertrip}`
  client.query(tables, cb);
}
module.exports = {
  createTable: createTable
}
