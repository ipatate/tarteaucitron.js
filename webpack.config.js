const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    // development, production
    mode: 'production',
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'tarteaucitron'),
        filename: 'tarteaucitron.js',
        publicPath: '/tarteaucitron/'
    },
    module: {
        rules: [{
                test: /\.svg$/,
                use: [
                    'url-loader', // or url-loader
                    {
                        loader: 'svg-fill-loader'
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'svg-fill-loader/encodeSharp', 'postcss-loader', 'sass-loader']
                })
            },
        ]
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