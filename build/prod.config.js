const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require("./base.config");
const config = {
  mode: "production",
  module: {
    rules: [
      {
        test: /.s?css$/,
        loader: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: "./css/[name].css", // 提取出来的css文件路径以及命名
    }),
  ],
};

module.exports = merge(baseConfig, config);
