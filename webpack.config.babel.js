/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      { 
        test: /\.jsx?$/, exclude: /node_modules/,
        loader: 'babel'
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: (() => {
    if (process.argv.indexOf('-p') !== -1) {
      return [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        }),
        new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false,
          },
        }),
      ];
    }
    return [];
  })(),
};
