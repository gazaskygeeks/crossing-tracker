const server = require('./backend/server.js');
const dbutils = require('./database/dbutils.js');

dbutils.runMigrate((error) => {
  if (error) {
    throw error
  }
  const query = 'SELECT * FROM trip order by trip_id desc limit $1;';
  const data = ['1']
  dbutils.runQuery(query, data, (err, result) => {
    if (result.rowCount > 0) {
      // eslint-disable-next-line no-console
      console.log('there is data in table so you cant use sequence');
    } else {
      dbutils.runSequence((err, result1) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.log('errr in sequencr:', err);
          return;
        }
      })
    }
    server.start((error) => {
      if (error) {
        throw error
      }
      // eslint-disable-next-line no-console
      console.log('Server running at:' + server.info.uri)
    })

  })

})
