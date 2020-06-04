var path = require("path");
var TSConfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  extensions: [".tsx", ".ts", ".js", ".json"],
  plugins: [
    new TSConfigPathsWebpackPlugin({
      configFile: path.resolve(__dirname, "../tsconfig.json")
    })
  ]
};
