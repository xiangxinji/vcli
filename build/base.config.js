"use strict";

const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
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
    rules: [
      // vue
      {
        test: /.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm.js",
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      template: resolvePublic("index.html"),
    }),
    new VueLoaderPlugin(),
  ],
};
