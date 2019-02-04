
const Merge = require('webpack-merge');

const envConfig = process.env.NODE_ENV === 'production' ? require('./webpack.config.prod') : require('./webpack.config.dev');

// We use this here at edX
module.exports = Merge.smart(require('./webpack.config.common'), envConfig);