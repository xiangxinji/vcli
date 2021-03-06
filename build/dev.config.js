const merge = require("webpack-merge");
const baseConfig = require("./base.config");
const config = {
  mode: "development",
  module: {
    rules: [
      {
        test: /.s?css$/,
        loader: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    hot: true,
    host: "0.0.0.0",
  },
};

module.exports = merge(baseConfig, config);
