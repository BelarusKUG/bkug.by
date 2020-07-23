const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function (options = {}) {
  // Settings
  // --env.NODE_ENV root --env.SOURCE_MAP source-map ...
  const NODE_ENV = options.NODE_ENV;
  const SOURCE_MAP = options.SOURCE_MAP;
  const BUILD_TIME = options.BUILD_TIME || new Date().toISOString();
  const DIST = path.resolve(__dirname, "..", "site", "src", "main", "resources", "public");
  const APP = path.resolve(__dirname, "app");

  // Log as error, so this will not be part of stats.json.
  console.error(`
Build started with following configuration:
===========================================
→ NODE_ENV: ${NODE_ENV}
→ SOURCE_MAP: ${SOURCE_MAP}
→ BUILD_TIME: ${BUILD_TIME}
→ DIST: ${DIST}
`);

  return {
    mode: NODE_ENV,
    entry: path.resolve(APP, "src","main.tsx"),
    output: {
      path: DIST,
      filename: "[name].js?[contenthash]",
      publicPath: ""
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    bail: false,
    devtool: SOURCE_MAP,
    module: {
      rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }, {
        test: /\.fluent$/,
        use: "raw-loader",
      },]
    },
    plugins: createListOfPlugins()
  };

  function createListOfPlugins() {
    return [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(APP, "index.html")
      }),
      new CopyWebpackPlugin([{
        from: path.resolve(APP, "kotlin_jobs"),
        to: DIST
      }, {
        from: path.resolve("node_modules", "bulma", "css", "bulma.min.css"),
        to: DIST
      }]),
      new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify(NODE_ENV)
        },
        _BUILD_TIME: JSON.stringify(BUILD_TIME)
      })
    ];
  }
};

