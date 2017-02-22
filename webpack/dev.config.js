const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    publicPath: '/dist/',
  },

  module: {
      // Loader fo css modules (https://github.com/gajus/react-css-modules)
      loaders: [{
          test: /\.css$/,
          loader: 'style!css?module&localIdentName=[path]__[local]__[hash:base64:3]!postcss',
      }],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
      __DEVELOPMENT__: true,
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
