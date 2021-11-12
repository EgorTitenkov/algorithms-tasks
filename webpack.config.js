const path = require('path')

module.exports = {
    entry: './src/webpack_test.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}