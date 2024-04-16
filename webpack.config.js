const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  entry: './src/sass/main',
  resolve: {
    extensions: ['.sass'],
  },
  output: {
    path: path.resolve(__dirname, 'static/css'),
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
  devtool: false
};
