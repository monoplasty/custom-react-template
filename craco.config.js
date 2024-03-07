const path = require("path");
const WebpackBar = require("webpackbar");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.ANALYZE === "true" ? [new BundleAnalyzerPlugin()] : []),
    ],
    alias: {
      "@": resolve("src"),
    },
    // 解决使用buffer、stream时的错误
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        resolve: {
          ...webpackConfig.resolve,
          fallback: {
            ...webpackConfig.resolve.fallback,
            buffer: require.resolve("buffer"),
            stream: require.resolve("stream-browserify"),
          },
        },
      };
    },
  },
};
