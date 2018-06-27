const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          plugins: [ 'transform-class-properties' ],
          presets: ['env']
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.pug/,
        use: [
          "html-loader",
          "pug-html-loader"
        ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, "docs/"),
    publicPath: "./",
    filename: "script.js"
  },

  devServer: {
    contentBase: path.join(__dirname, "docs/"),
    port: 3000,
    publicPath: "http://localhost:3000/",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template : './src/index.pug',
      inject   : true
    })
  ]
};
