/*global process*/
const hapi = require('hapi');
const inert = require('inert')
const server = new hapi.Server();
const routes = require('./routes/routes.js');

server.connection({
  port: process.env.PORT || 3000
})

server.register(inert, (err) => {
  if (err) {
    throw err
  }
  server.route(routes)
});

module.exports = server
