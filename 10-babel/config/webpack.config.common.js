const path = require('path');
const webpack = require('webpack');

const banner = `
/*********************
 * THIS IS OUR STUFF!
 ********************/
`;

module.exports = {
  entry: 'main.js',
  output: {
    path: path.resolve(__dirname, '..', 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
      exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // Tells webpack how to append CSS to the DOM as a style tag.
          'css-loader' // Tells webpack how to read a CSS file.
        ]
      },
      {
        test: /\.(jpg|png)$/,
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
  plugins: [
    new webpack.BannerPlugin({
      banner,
      entryOnly: true
    }),
    new webpack.EnvironmentPlugin({
      DEBUG: process.env.NODE_ENV === 'development',
      NODE_ENV: process.env.NODE_ENV
    })
  ],
  resolve: {
    modules: [
      'node_modules', // The default
      'src'
    ]
  }
};
