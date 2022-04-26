const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'main.js'
  },
  module: {

  },
  mode: 'production',
  plugins: [
  new HtmlWebpackPlugin({
  chunks: ['lib.min', 'gui'],
  template: 'src/index.ejs',
  title: 'Gvbvdxxs Mod',
  sentryConfig: process.env.SENTRY_CONFIG ? '"' + process.env.SENTRY_CONFIG + '"' : null
  })],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000
  },
  stats: {warnings:false}
};