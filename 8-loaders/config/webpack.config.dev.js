const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'build')
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
