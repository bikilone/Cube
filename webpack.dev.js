const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  plugins: [
    new StylelintPlugin({fix: true}),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
});
