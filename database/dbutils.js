const client = require('./config.js');
const table = require('../scripts/sql.js');

function createTable(cb) {
  const tables = `${table.org}
  ${table.location}
  ${table.users}
  ${table.trip}
  ${table.usertrip}`
  client.query(tables, cb);
}

function select (table,condition,cb){
  const query = 'SELECT * from ? where ?;';
  client.query(query,[table,condition],(errSelect,result)=>{
    if (errSelect){
      cb(errSelect,undefined)
    }
    else {
      cb (errSelect,result.rows)
    }
  })
}

function insert (table,data,cb) {
  const d = conversion(data);
  const query = `INSERT INTO ${table} ${d};`
  client.query(query, (errInsert, result) => {
    if (errInsert) {
      cb(errInsert);
    }else{
      cb(undefined, result.rows);
    }
  });
}


module.exports = {
  createTable: createTable,
  select:select,
  insert:insert
}

//conversion function
//input: {username:"alaa",password:"123asd!@#"}
//output: (username,password) value ("alaa","123asd!@#")

// arraytoString function
// input: {username:"aaaaa",passwprd:"pasdsad"}
//output:username, passwprd
function conversion(data) {
  const columns = arraytoString(Object.keys(data));
  const values = arraytoString(Object.keys(data).map((elm) => typeof data[elm] === 'string' ? `'${data[elm]}'` : data[elm]))
  return `(${columns}) values (${values})`;
}
function arraytoString(array) {
  return array.reduce(function(prev, curr, index) {
    prev = prev + curr
    if (index < array.length - 1) {
      prev = prev + ', ';
    }
    return prev;
  }, '');
}
