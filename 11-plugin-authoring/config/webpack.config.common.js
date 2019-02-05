
const path = require('path');

const LogAllTheThingsPlugin = require('./LogAllTheThingsPlugin');

module.exports = {
  entry: 'main.js',
  output: {
    path: path.resolve(__dirname, '..', 'build')
  },
  plugins: [
    new LogAllTheThingsPlugin()
  ],
  resolve: {
    modules: [
      'node_modules', // The default
      'src'
    ]
  }
}

