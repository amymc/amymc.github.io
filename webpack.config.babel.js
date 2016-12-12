/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './index.jsx',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test:   /\.css$/,
        //https://github.com/webpack/css-loader/issues/295
        // include: [
        //   path.resolve(__dirname, "not_exist_path")
        // ],
        loader: "style-loader!css-loader!postcss-loader"
      },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },
  postcss: function () {
    return [require('postcss-autoreset'), require('postcss-nesting'), require('postcss-nested')];
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
