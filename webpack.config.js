const nodeEnv = process.env.NODE_ENV.trim();
const inProd = (nodeEnv === 'production');

const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'public/stylesheets/coreStyles.css',
    publicPath: '../public',
    disable: !inProd
});

const extractVue = new ExtractTextPlugin({
    filename: 'public/stylesheets/vueStyles.css',
    disable: !inProd
});

const sassLoaders = ['css-loader', 'postcss-loader', 'sass-loader'];

module.exports = {
    entry: "./vue-src/main.js",
    output: {
        path: __dirname,
        filename: path.join('public', 'javascripts', 'main.bundle.js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                      name: 'public/images/[name].[ext]'
                    }
                  }
                ]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: sassLoaders
                })
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            scss: extractVue.extract({
                                fallback: 'vue-style-loader',
                                use: sassLoaders
                            })
                        }
                    }
                }
            }
        ]
    },
    plugins: [
    	new HtmlWebpackPlugin({
    		template: path.resolve(__dirname, 'vue-src', 'template.ejs'),
            filename: path.resolve(__dirname, 'views', 'index.html'),
            alwaysWriteToDisk: !inProd
    	}),
        new HtmlWebpackHarddiskPlugin({
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),

        extractSass,
        extractVue
    ],
    devServer: {
        hot: true,
        compress: true,
        contentBase: path.resolve(__dirname, 'views')
    }
};