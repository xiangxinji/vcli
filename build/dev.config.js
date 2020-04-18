const merge = require("webpack-merge");
const baseConfig = require("./base.config");
const config = {
  mode: "development",
  devServer: {
    hot: true,
    host: "0.0.0.0",
  },
};

module.exports = merge(baseConfig, config);
