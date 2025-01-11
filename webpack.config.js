const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader', // Use json-loader if needed
        type: 'javascript/auto'  // Added for Webpack 5
      }
    ],
  },
  resolve: {
  extensions: ['.js', '.json']
}
};
