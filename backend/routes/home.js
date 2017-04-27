const home = {
  method: 'GET',
  path: '/',
  config:{
    handler: (request, reply) => {
      reply.file('public/src/index.html')
    },auth:'session'
  },

}

module.exports = home;
