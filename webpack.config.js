webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    "japanese-date-converter": "./src/japanese-date-converter.ts",
    "jquery.japanese-date-converter": "./src/jquery.japanese-date-converter.js",
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js",
    library: {
      name: "JapaneseDateConverter",
      type: "umd",
    },
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  externals: [
    {
      jquery: "jQuery",
      $: "jQuery",
      jQuery: "jQuery",
    },
  ],
  resolve: {
    extensions: ["*", ".js", ".ts"],
  },
};
