const server = require('./backend/server.js');

server.start((err) => {
  if (err) {
    throw err
  }
  // eslint-disable-next-line no-console
  console.log('Server running at:' + server.info.uri)
})
