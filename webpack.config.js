var webpack = require('webpack');

module.exports = {
    //context: __dirname + '/src',
    entry: './src/main.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loaders: ['json-loader']
            },
            {   test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {   test: /\.less$/,
                loader: 'less-loader'
            },
            {   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions:         ['', '.js', '.jsx']
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
        },
        host: '127.0.0.1'
    }
};

