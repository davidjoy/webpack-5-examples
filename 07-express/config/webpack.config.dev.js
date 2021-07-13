const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    'main.js',
    'webpack-hot-middleware/client'
  ],
  output: {
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    hot: true,
    static: [
      path.join(__dirname, '..', 'build'),
    ],
    devMiddleware: {
      publicPath: '/',
    },
  }
};
