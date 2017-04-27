const server = require('./backend/server.js');
const dbutils = require('./database/dbutils.js');
// const hash = require('./backend/utils.js')
// const data = require('./scripts/sqltest.js');
dbutils.runMigrate((err) => {
  if (err) {
    throw err
  }
  // hash('123654', (err, hashPass) => {
  //   const user = ['alaa', 'alaa@gmail.com', hashPass, '1236543', 1, 3, 1];
  //   dbutils.runQuery(data.userQuery, user, (err) => {
  //     server.start((err) => {
  //       if (err) {
  //         throw err
  //       }
  //       // eslint-disable-next-line no-console
  //       console.log('Server running at:' + server.info.uri)
  //     })
  //   });
  // })
  server.start((err) => {
    if (err) {
      throw err
    }
    // eslint-disable-next-line no-console
    console.log('Server running at:' + server.info.uri)
  })
})
