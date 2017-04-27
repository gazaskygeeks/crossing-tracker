const assets = {
  method: 'GET',
  path: '/public/{file*}',
  config:{
    auth: false,
    handler: {
      directory: {
        path: 'public'
      }
    }}
}

module.exports = assets;
