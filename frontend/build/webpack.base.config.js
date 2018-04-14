// Suppress lint error for dependencies
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const entrypoint = './src/main.ts';
const fn = 'ryanet.js';
const output = './../dist';

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {

    entry: [
        entrypoint,
    ],

    output: {
        path: path.resolve(__dirname, output),
        filename: fn,
    },

    module: {
        loaders: [

            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')],
            },

            {

                test: /\.tsx?$|!\.vue$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.json',
                    appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/,
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 250000,
                },
            },
        ],
    },

    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        modules: [
            path.resolve('./'),
            path.resolve('./node_modules'),
        ],
        alias: {
            // has to be vue.esm.js, or it adds extra .defualt to `new Vue`
            vue$: 'vue/dist/vue.esm.js',
            jquery: 'jquery/src/jquery',
        },
        // it has to be here, not the other plugins
        plugins: [
            new TsconfigPathsPlugin(),
        ],
    },

    plugins: [

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
        }),

        new webpack.DefinePlugin({
            'process.env': {
                // Has to be stringified
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],

    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
};
