const path = require('path')
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    server: './index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'node',
  module: {
    rules: [
      {
        // Convert es6 -> es5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}