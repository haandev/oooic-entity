const path = require("path");
const nodeExternals = require("webpack-node-externals");
const Dotenv = require("dotenv-webpack");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = (env) => ({
  entry: "./index.ts",
  mode: env.target,
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: { "@": path.resolve(__dirname, "src") },
  },
  externals: [nodeExternals()],
  watch: env.target === "development",
  plugins: [
    new Dotenv({
      path: `./.env.${env.target}`,
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),
    new NodemonPlugin({ watch: "*" }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
});
