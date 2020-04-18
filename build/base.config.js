"use strict";

const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const {
  resolveOutput,
  resultEntryDir,
  resolvePublic,
} = require("../utils/resolvePath");
const baseConfig = require("../config/baseConfig")();

module.exports = {
  entry: resultEntryDir("main.js"),
  output: {
    path: resolveOutput(),
    filename: "bundle.js",
  },
  module: {
    rules: [],
  },
  resolve: {},
  plugins: [
    new htmlWebpackPlugin({
      template: resolvePublic("index.html"),
    }),
  ],
};
