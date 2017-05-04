module.exports = (request, reply) => {
  request.cookieAuth.clear();
  reply.redirect('/').state

}
