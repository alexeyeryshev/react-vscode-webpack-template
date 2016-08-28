var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/app.jsx',
  output: {
    path: './target',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/html/index.html', to: 'index.html' }
    ])
  ],
  devServer: {
    inline: true,
    port: 8080
  }
};