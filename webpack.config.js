const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.html$/, use: 'raw-loader' },
            { test: /\.(s*)css$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    }
};