const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  devtool: "cheap-module-source-map",
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: () => [
                  autoprefixer({
                    browsers: ["> 1%", "last 2 versions"]
                  })
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader?limit=8000&name=images/[name].[ext]"
      },
      {
        test: /\.(mov|mp4)$/,
        loader: "file-loader?name=/src/assets/images/[name].[ext]"
      }
    ]
  },
  // redirect 404s to /index.html.
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000"
      }
    }
  },
  plugins: [
    //for using media query
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: [
          require("postcss-import")(),
          require("postcss-url")(),
          require("postcss-cssnext")({
            browsers: "last 2 versions"
          })
        ],
        context: path.resolve(__dirname, "src")
      }
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject: "body"
    }),
    //have css file linked inside html
    new ExtractTextPlugin({
      filename: "index.css"
    }),
    //copy images to dist folder
    new CopyWebpackPlugin([
      { from: "src/assets/images", to: "src/assets/images" }
    ]),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
