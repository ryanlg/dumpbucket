// Suppress lint error for dependencies
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
const WebpackNotifierPlugin = require('webpack-notifier');
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.config');

module.exports = webpackMerge(baseWebpackConfig, {

    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },

            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap',
                ],
            },

            {
                test: /\.woff2$/,
                loader: 'file-loader',
                // options: {
                //     name: '/assets/fonts/[hash][name].[ext]',
                //     publicPath: '/',
                // },
            },
        ],
    },

    plugins: [

        // uncomment for analyzer
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // }),

        new WebpackNotifierPlugin(),

        // HRM
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        new FriendlyErrorPlugin(),
    ],
});
