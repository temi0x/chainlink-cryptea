
module.exports = {
  reactScriptsVersion: "react-scripts",
  eslint: {
    enable: false
  },
  webpack: {
    configure: {
      resolve: {
        fallback: {
          zlib: require.resolve("browserify-zlib"),
          stream: require.resolve("stream-browserify"),
          https: require.resolve("https-browserify"),
          http: require.resolve("stream-http")
        },
      },
    },
  },
  
};
