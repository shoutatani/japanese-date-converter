webpack = require('webpack');
module.exports = {
  mode: "production",
  entry: {
    "jquery.japanese-era-date-converter" : "./src/jquery.japanese-era-date-converter",
    "japanese-era-date-converter" : "./src/japanese-era-date-converter",
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js"
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
      $: 'jQuery',
      jQuery: 'jQuery'
    }
  ]
};
