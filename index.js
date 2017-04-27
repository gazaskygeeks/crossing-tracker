const server = require('./backend/server.js');
const dbutils = require('./database/dbutils.js');

dbutils.runMigrate((err) => {
  if (err) {
    throw err
  }


  server.start((err) => {
    if (err) {
      throw err
    }
  // eslint-disable-next-line no-console
    console.log('Server running at:' + server.info.uri)
  })
})
