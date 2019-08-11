webpack = require('webpack');
module.exports = {
  mode: "production",
  entry: {
    "jquery.japanese-date-converter" : "./src/jquery.japanese-date-converter",
    "japanese-date-converter" : "./src/japanese-date-converter",
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
