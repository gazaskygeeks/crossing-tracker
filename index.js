const hapi = require('hapi');
const server = new hapi.Server();
server.connection({
  port: 3000
})
server.start((err) => {
  if (err) {
    throw err
  }
  // eslint-disable-next-line no-console
  console.log('Server running at:' + server.info.uri)
})
