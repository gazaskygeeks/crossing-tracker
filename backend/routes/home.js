const home = {
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply.file('public/src/index.html')
  }
}

module.exports = home;
