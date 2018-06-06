const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    // development, production
    mode: 'production',
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'tarteaucitron.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            exclude: /node_modules/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('tarteaucitron.css'),
        new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'), // eslint-disable-line
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        })
    ]
};