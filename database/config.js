/*global process*/
require('env2')('./.env');
const pg = require('pg');
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
    database: 'test',
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
var name = process.env.NODE_MOD

const location = process.env.NODE_ENV === 'production' ? config.heroku : config.test;
const client = new pg.Client(location);
client.connect(function(err) {
  if (err) {
    console.log('name',name);
    console.log('location',location);
    console.log('config.name',config.name);
    console.log('node mod',process.env.NODE_MOD );
    throw err;
  }
});
module.exports = client;
