const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry: "./vue-src/vueApp.js",
    output: {
        path: __dirname,
        filename: path.join('public', 'javascripts', 'vueApp.bundle.js')
    },
    module: {
        loaders: [
        ]
    },
    plugins: [
    	new HtmlWebpackPlugin({
    		title: 'Home | Curtis Fulton',
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