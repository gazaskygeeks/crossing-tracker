const dbutils = require('./dbutils.js');

function getOrgs(cb) {
  const query = 'SELECT * From org';
  dbutils.runQuery(query, cb);
}

module.exports = {
  getOrgs: getOrgs
}
