var path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css",
            },
          },
          {
            loader: "extract-loader",
            options: {
              publicPath: "../",
            }
          },
          // {
          //   loader: "style-loader" // creates style nodes from JS strings
          // },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};
