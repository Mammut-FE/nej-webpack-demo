const htmlWebpackPlugin = require('html-webpack-plugin');
const removeStrictPlugin = require('remove-strict-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new removeStrictPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'src/html/index.html')
        })
    ],
    mode: 'development',
    devtool: 'sourcemap'
};
