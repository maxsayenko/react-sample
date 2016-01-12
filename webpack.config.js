module.exports = {
    //context: __dirname + "/src",
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/build"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            }
        ]
    }
};

