const path = require('path');

module.exports = {
  entry: {
    main: 'main.js'
  },
  output: {
    path: path.resolve(__dirname, '..', 'build')
  },
  resolve: {
    modules: [
      'node_modules', // The default
      'src'
    ]
  }
};
