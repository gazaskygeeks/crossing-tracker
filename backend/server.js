/*global process*/
const hapi = require('hapi');
const inert = require('inert')
const server = new hapi.Server();
const routes = require('./routes/routes.js');
const CookieAuth = require('hapi-auth-cookie')
server.connection({
  port: process.env.PORT || 3000
})
const cache = server.cache({ segment: 'sessions', expiresIn: 3 * 24 * 60 * 60 * 1000 });
server.app.cache = cache;

server.register(CookieAuth, function (err) {
  server.auth.strategy('session', 'cookie',true, {
    password: 'mngiyt76gsdjfldsjflkjioej097tf586tyibf6gr86yt',
    cookie: 'sid',
    redirectTo: '/',
    isSecure: false,
    ttl: 3 * 24 * 60 * 60 * 1000,
    validateFunc: function (request, session, callback) {
      if (session.user_id) {
        return callback(null, true, session.user_id);
      }
    }
  });
});
server.register(inert, (err) => {
  if (err) {
    throw err
  }
  server.route(routes)
});
module.exports = server
