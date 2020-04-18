"use strict";

const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const {
  resolveOutput,
  resolveEntryDir,
  resolvePublic,
  resolveRootDir,
} = require("../utils/resolvePath");
const baseConfig = require("../config/baseConfig")();

module.exports = {
  entry: resolveEntryDir("main.js"),
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
      "@": resolveEntryDir(),
      "@env": resolveRootDir("env"),
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      template: resolvePublic("index.html"),
    }),
    new VueLoaderPlugin(),
  ],
};
