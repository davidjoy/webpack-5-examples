const path = require('path');

module.exports = {
  mode: 'production',
  entry: 'main.js',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '..', 'build')
  },
  resolve: {
    modules: [
      'node_modules', // The default
      'src'
    ]
  }
}

