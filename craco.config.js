module.exports = {
  reactScriptsVersion: "react-scripts",
  webpack: {
    configure: {
      resolve: {
        fallback: {
          zlib: require.resolve("browserify-zlib"),
          stream: require.resolve("stream-browserify"),
          https: require.resolve("https-browserify"),
          http: require.resolve("stream-http"),
          crypto: require.resolve("crypto-browserify")
        },
      },
    },
  },
  eslint: {
    enable: false
  },
  ignoreWarnings: [/Failed to parse source map/]
};
