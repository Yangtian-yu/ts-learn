const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugdin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.ts",
  },
  output: {
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/tpl/index.html",
    }),
    new ForkTsCheckerWebpackPlugdin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
