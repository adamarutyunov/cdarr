const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static'
  },
  module: {
    rules: [
      {
        test: /\.(ttf|svg)$/,
        use: [
          {
          loader: 'file-loader',
          options: {
            name: '/fonts/[name].[ext]',
          },
        },
      ]
      },
      {
        test: /\.sass$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    })
  ],
  devtool: false
};