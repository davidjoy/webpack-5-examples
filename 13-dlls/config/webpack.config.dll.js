const path = require('path');
const webpack = require('webpack');

const dependencies = require('../package.json').dependencies;

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: Object.keys(dependencies || {})
  },
  output: {
    library: 'main',
    libraryTarget: 'var',
    filename: '[name].vendor.bundle.js',
    path: path.resolve(__dirname, '..', 'build')
  },
  plugins: [
    new webpack.DllPlugin({
      // context: path.resolve(__dirname, '..', 'build'),
      name: 'main',
      path: path.join(__dirname, '..', 'build', 'manifest.json')
    })
  ]
};
