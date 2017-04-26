const dbutils = require('../database/dbutils.js');
const client = require('../database/config.js');
dbutils.runMigrate((err) => {
  if (err) {
    throw err
  }
  //client.end()
})
