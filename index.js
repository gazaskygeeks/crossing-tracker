const server = require('./backend/server.js');
const dbutils = require('./database/dbutils.js');

dbutils.runMigrate((error) => {
  if (error) {
    throw error
  }


  server.start((error) => {
    if (error) {
      throw error
    }
  // eslint-disable-next-line no-console
    console.log('Server running at:' + server.info.uri)
  })
})
