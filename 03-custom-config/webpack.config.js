/**
 * Custom entry point
 */
module.exports = {
  mode: 'development',
  entry: './src/main.js'
}

/**
 * A bit more customization...
 */
// const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: 'main.js',
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'build')
//   },
//   resolve: {
//     modules: [
//       'node_modules', // The default
//       'src'
//     ]
//   }
// }

/**
 * Production-like config
 */
// const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: 'main.js',
//   output: {
//     filename: '[name].[hash].bundle.js',
//     path: path.resolve(__dirname, 'build')
//   },
//   resolve: {
//     modules: [
//       'node_modules', // The default
//       'src'
//     ]
//   }
// }

/**
 * Gosh, we have two configs.
 * 
 * NOTE: When in production mode, minimization happens automatically.
 */
// const path = require('path');

// const nodeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';

// module.exports = {
//   mode: nodeEnv,
//   entry: 'main.js',
//   output: {
//     filename: nodeEnv === 'production' ? '[name].[hash].bundle.js' : '[name].bundle.js',
//     path: path.resolve(__dirname, 'build')
//   },
//   resolve: {
//     modules: [
//       'node_modules', // The default
//       'src'
//     ]
//   }
// }

