var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var resolveConfig = require("./resolve-config");

module.exports = {
  mode: "development",
  entry: "../example/app.tsx",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          happyPackMode: true
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader"
          },
          {
            loader: "style-loader"
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../template.ejs")
    })
  ],
  resolve: resolveConfig,
  devServer: {
    contentBase: "/",
    host: "0.0.0.0",
    port: 6009
  }
};
