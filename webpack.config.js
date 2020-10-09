const path = require('path');

module.exports = {
  entry: './public/index.jsx',
  module: {
    rules: [
        {
            test: /\.(jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  }
};