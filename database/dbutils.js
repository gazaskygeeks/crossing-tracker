const client = require('./config.js');
const table = require('../scripts/sql.js');

function runMigrate(cb) {
  const tables = `${table.org}
  ${table.location}
  ${table.users}
  ${table.trip}
  ${table.usertrip}`
  client.query(tables,cb);
}


function runQuery(query, data, cb) {
  client.query(query,data,cb)

function select (query,condition,cb){
  client.query(query,condition,(errSelect,result)=>{

    if (errSelect){
      cb(errSelect)
    }
    else {
      cb (errSelect,result.rows)
    }
  })
}
function insert (query,data,cb) {

  client.query(query,data, (errInsert) => {
    if (errInsert) {
      cb(errInsert);
    }else{
      cb(errInsert);
    }
  });

}

module.exports = {
  runMigrate,
  runQuery,
  select,
  insert
}
