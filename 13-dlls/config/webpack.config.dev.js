const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var execSync = require('child_process').execSync;

const dll = path.resolve(__dirname, '..', 'build')
const manifest = path.resolve(dll, 'manifest.json');

/**
 * Warn if the DLL is not built
 */
if (!(fs.existsSync(dll) && fs.existsSync(manifest))) {
  console.log("Hey, we're missing the DLL.  Building it with npm run dll...");
  execSync('npm run dll');
}

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..', 'build'),
      manifest,
      sourceType: 'var'
    }),
  ],
};
