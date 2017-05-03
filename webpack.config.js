/* eslint-disable */

module.exports = {
  entry: './public/src/index.jsx',
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader','css-loader']

      }
    ]
  },
  devtool: 'inline-source-map',

}
