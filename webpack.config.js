/* eslint-disable */

const webpack = require('webpack');
const common= {
  entry: './public/src/index.jsx',
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js|jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/
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
};
const development = {
  devtool:'inline-source-map'
};
const production = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
module.exports =
  Object.assign(
    common,
     process.env.NODE_ENV === 'production'
      ? production
      : development
  );
