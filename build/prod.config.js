const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const baseConfig = require("./base.config");
const config = {
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
};

module.exports = merge(baseConfig, config);
