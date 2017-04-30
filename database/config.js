/*global process*/
if (process.env.NODE_ENV !== 'production'){
  require('env2')('./.env');
}
const pg = require('pg');
const config = {
  development: {
    user: 'postgres',
    password: '123654',
    database: 'test2',
    port: 5432
  },
  test: {
    user: 'postgres',
    password: '123654',
    database: 'tests',
    port: 5432
  },
  production: {
    user: process.env.HEROKU_USER,
    password: process.env.HEROKU_PASSWORD,
    database: process.env.HEROKU_DATABASE,
    host : process.env.HEROKU_HOST,
    port: process.env.HEROKU_PORT,
    ssl: process.env.HEROKU_SSL
  }
}
const client = new pg.Client(config[process.env.NODE_ENV]);

client.connect(function(err) {
  if (err) {
    throw  err;
  }
});
module.exports = client;
