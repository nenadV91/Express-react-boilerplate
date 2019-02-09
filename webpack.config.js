const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "client", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      loader: "babel-loader",
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }, {
      test:/\.css$/,
      use:['style-loader','css-loader']
    }]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "client", "components"),
      pages: path.resolve(__dirname, "client", "pages"),
      assets: path.resolve(__dirname, "client", "assets")
    }
  }
}