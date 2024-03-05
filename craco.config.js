const path = require("path");
const CracoLessPlugin = require("craco-less");
const WebpackBar = require("webpackbar");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    plugins: [
      new WebpackBar({ profile: true }),
      // ...(process.env.NODE_ENV === "development" ? [] : [new BundleAnalyzerPlugin()]),
    ],
    alias: {
      "@": resolve("src"),
    },
  },
};
