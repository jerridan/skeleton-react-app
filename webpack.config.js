const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // You can switch to `.jsx` if not using TypeScript
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/, // Matches .js, .jsx, .ts, and .tsx files
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
  },
  mode: "development",
};
