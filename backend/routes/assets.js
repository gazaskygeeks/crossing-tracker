const assets = {
  method: 'GET',
  path: '/public/{file*}',
  handler: {
    directory: {
      path: 'public'
    }
  }
}

module.exports = assets;
