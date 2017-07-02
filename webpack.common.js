var path = require('path');

module.exports = {
  context: path.resolve(__dirname, "app/assets/source"),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "app/assets/javascripts"),
    filename: "front_end_friendly.js"
  },
  module: {
    rules: [
      { test: /\.js$/,
        include: path.resolve(__dirname, "app/assets/source"),
        use: "babel-loader"
      },
      {
        test: /\.coffee$/,
        include: path.resolve(__dirname, "app/assets/source"),
        use: "coffee-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".coffee"]
  },
  devtool: "inline-source-map"
};
