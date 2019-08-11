webpack = require("webpack");
module.exports = {
  mode: "production",
  entry: {
    "jquery.japanese-date-converter": "./src/jquery.japanese-date-converter.js",
    "japanese-date-converter": "./src/japanese-date-converter.ts"
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  externals: [
    {
      jquery: "jQuery",
      $: "jQuery",
      jQuery: "jQuery"
    }
  ],
  resolve: {
    extensions: ["*", ".js", ".ts"]
  }
};
