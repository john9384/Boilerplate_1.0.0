import path from "path";
import webpack from "webpack";

export default {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    performance: {
        hints: "warning", // enum
        maxAssetSize: 200000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
        assetFilter: function(assetFilename) {
            // Function predicate that provides asset filenames
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js',
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    },
};