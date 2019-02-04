const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: 'main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'build')
  },
  resolve: {
    modules: [
      'node_modules', // The default
      'src'
    ]
  }
}

