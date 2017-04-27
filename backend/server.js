/*global process*/
const hapi = require('hapi');
const server = new hapi.Server();
const routes = require('./routes/routes.js');

server.connection({
  port: process.env.PORT || 8000
})
server.route(routes)

module.exports=server
