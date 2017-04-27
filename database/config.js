/*global process*/
require('env2')('./.env');
const pg = require('pg');
const config = {
  local: {
    user: 'postgres',
    password: '123654',
    database: 'local',
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

var   location ;
if(process.env.NODE_ENV === 'production')
{
  location = config.heroku;
}
else if(process.env.NODE_ENV==='test'){
  location = config.test;
}
else {
  location =config.local;
}
const client = new pg.Client(location);
client.connect(function(err) {
  if (err) {
    throw err;
  }
});
module.exports = client;
