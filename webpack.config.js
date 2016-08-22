const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getPath = file => path.resolve(__dirname, file);

// Settings
// export NAME=VALUE
const NODE_ENV = process.env.NODE_ENV || 'development';
const SOURCE_MAP = process.env.SOURCE_MAP || 'eval-source-map'; // 'source-map'

console.log(`
Build started with following configuration:
===========================================
→ NODE_ENV: ${NODE_ENV}
→ SOURCE_MAP: ${SOURCE_MAP}
`);

const config = {
    entry: {
        vendor: [
            'babel-polyfill',
            'lodash'
        ],
        app: [
            getPath('app/src/main.tsx')
        ]
    },
    output: {
        path: getPath('dist'),
        filename: '[name].js?[hash]'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.ts', '.tsx', '.js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'babel!ts'
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }, {
            test: /\.scss$/,
            loader: 'style!css!postcss!sass'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: "url?limit=32768"
        }]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: getPath('app/index.ejc'),
            favicon: getPath('app/favicon.ico'),
            hash: true
        })
    ],
    devtool: SOURCE_MAP,
    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};

if (NODE_ENV === 'production') {
    console.log(`Minify build with UglifyJsPlugin`);
    config.plugins = [
        ...config.plugins,
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ];
}

module.exports = config;