const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry: "./vue-src/main.js",
    output: {
        path: __dirname,
        filename: path.join('public', 'javascripts', 'main.bundle.js')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env']
                }
            }, 
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
    	new HtmlWebpackPlugin({
    		template: path.resolve(__dirname, 'vue-src', 'template.ejs'),
            alwaysWriteToDisk: true
    	}),
        new HtmlWebpackHarddiskPlugin({
            outputPath: path.resolve(__dirname, 'views')
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        hot: true,
        compress: true,
        contentBase: path.resolve(__dirname, 'views')
    }
};