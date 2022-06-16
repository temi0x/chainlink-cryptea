module.exports = function override(config, env) {
    let loaders = config.resolve
    loaders.fallback = {
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify"),
        https: require.resolve("https-browserify"),
        http: require.resolve("stream-http"),
        crypto: require.resolve("crypto-browserify")
    }

    return config
}
