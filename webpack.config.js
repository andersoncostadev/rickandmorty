const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopement = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopement ? 'development' : 'production',
    devtool: isDevelopement ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        historyApiFallback: true,
        hot: true,
    },
    plugins: [
        isDevelopement && new ReactRefreshWebpackPlugin({
            overlay: false
        }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
    })
    ].filter(Boolean),
    module: {
        rules: [
           { 
               test: /\.(t|j)s(|x)$/,
               exclude: /node_modules/,
               use: {
                   loader: "babel-loader",
                   options: {
                       plugins: [
                           isDevelopement && require.resolve('react-refresh/babel')
                       ].filter(Boolean)
                   }
               }
            },
            {
                test: /\.s(c|a)ss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }

}