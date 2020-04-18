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
    filename: "js/[name].js",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      // vue
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              esModule: false,
              name: "imgs/[name].[ext]",
            },
          },
        ],
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
