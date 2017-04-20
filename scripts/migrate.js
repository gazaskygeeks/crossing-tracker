const client = require('../database/config.js');
const dbutils = require('../database/dbutils.js');

dbutils.createTable(client, (err) => {
  if (err)
    throw err
  client.end()
});
