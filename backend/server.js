/*global process*/
const hapi = require('hapi');
const server = new hapi.Server();
server.connection({
  port: 8000 || process.env.PORT
})
module.exports=server
