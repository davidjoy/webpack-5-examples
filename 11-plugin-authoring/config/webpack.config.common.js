
const path = require('path');
const { FileListPlugin } = require('./FileListPlugin');

module.exports = {
  entry: 'main.js',
  output: {
    path: path.resolve(__dirname, '..', 'build')
  },
  plugins: [
    new FileListPlugin()
  ],
  resolve: {
    modules: [
      'node_modules', // The default
      'src'
    ]
  }
}
