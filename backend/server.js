/*global process*/
const hapi = require('hapi');
const server = new hapi.Server();
server.connection({
  port: process.env.PORT || 8000 
})
module.exports=server
