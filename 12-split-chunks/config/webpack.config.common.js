const path = require('path');

module.exports = {
  entry: {
    main: 'main.js',
    other: 'other.js'
  },
  output: {
    path: path.resolve(__dirname, '..', 'build')
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1 // Required for this example to get cats.js split into its own chunk.  Defaults to 30k.
    }
  },
  resolve: {
    modules: [
      'node_modules', // The default
      'src'
    ]
  }
};
