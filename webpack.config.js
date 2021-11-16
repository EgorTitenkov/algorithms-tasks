const path = require('path')

module.exports = {
    entry: './src/algorithms_and_functional_programming/compose.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }

        ]
    },
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}