const server = require('./backend/server.js');
const dbutils = require('./database/dbutils.js');
var CookieAuth = require('hapi-auth-cookie')

dbutils.runMigrate((err) => {
  if (err) {
    throw err
  }
  server.register(CookieAuth, function (err) {
    server.auth.strategy('session', 'cookie')
    server.start((err) => {
      if (err) {
        throw err
      }
    // eslint-disable-next-line no-console
      console.log('Server running at:' + server.info.uri)
    })
  });

})
