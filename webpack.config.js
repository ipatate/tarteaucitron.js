const path = require('path');

module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'bundle.js'
    }
};