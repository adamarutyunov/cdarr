const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: './src/sass/main',
  resolve: {
    extensions: ['.sass'],
  },
  output: {
    path: path.resolve(__dirname, '../static/css'),
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {url: false}
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  devtool: false,
};
