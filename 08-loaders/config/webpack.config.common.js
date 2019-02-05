const path = require('path');

module.exports = {
  entry: 'main.js',
  output: {
    path: path.resolve(__dirname, '..', 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // Tells webpack how to append CSS to the DOM as a style tag.
          'css-loader' // Tells webpack how to read a CSS file.
        ]
      },
      {
        test: [/\.jpg$/, /\.png$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules', // The default
      'src'
    ]
  }
};
