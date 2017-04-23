/*global process*/

const pg = require('pg');
require('env2')('../.env');
const config = {
  local: {
    user: 'postgres',
    password: '123654',
    database: 'test2',
    port: 5432
  },
  test : {
    user: 'postgres',
    password: '123654',
    database: 'tests',
    port: 5432
  },
  heroku : {
    user: process.env.HEROKU_USER,
    password: process.env.HEROKU_PASSWORD,
    database: process.env.HEROKU_DATABASE,
    host : process.env.HEROKU_HOST,
    port: process.env.HEROKU_PORT,
    ssl: process.env.HEROKU_SSL
  }
}
const client = new pg.Client(config.local);
client.connect(function(err) {
  if (err) {
    return err;
  }
});
module.exports = client;
