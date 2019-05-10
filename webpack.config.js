webpack = require('webpack');
module.exports = {
  mode: "production",
  entry: "./src/jquery.japanese-era-date-converter",
  output: {
    path: `${__dirname}/dist`,
    filename: "jquery.japanese-era-date-converter.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ]
            }
          }
        ]
      }
    ]
  },
  externals: [
    {
      jquery: 'jQuery',
      $: 'jQuery'
    }
  ]
};
