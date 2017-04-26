const client = require('../database/config.js');
const table = require('../scripts/sql.js');
const sqldata = require('../scripts/sqltest.js');

const tables = `${table.org}
  ${table.location}
  ${table.users}
  ${table.trip}
  ${table.usertrip}`
client.query(tables,(err,result)=>{
  if (err)
    throw err

  const data = `${sqldata.org}
      ${sqldata.first_location}
      ${sqldata.second_location}
      ${sqldata.users}
      ${sqldata.trip}
      ${sqldata.usertrip}`

  client.query(data,(err,result)=>{
    if (err)
      throw err
  });

});
