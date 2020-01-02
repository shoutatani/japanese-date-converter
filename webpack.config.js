webpack = require("webpack");
module.exports = {
  mode: "production",
  entry: {
    "japanese-date-converter": "./src/japanese-date-converter.ts",
    "jquery.japanese-date-converter": "./src/jquery.japanese-date-converter.js"
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js",
    library: "JapaneseDateConverter",
    libraryTarget: 'umd',
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
