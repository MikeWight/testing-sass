var path = require('path');

var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: path.resolve(__dirname + '/public/js/app'),
        publicPath: "/js/app/",
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {loader: 'awesome-typescript-loader', options: {
                        transpileOnly: true
                    }},
                    {loader: 'angular2-template-loader'},
                    {loader: 'angular-router-loader'}
                ]
            },
          {
            test: /.*\.scss$/,
              loaders:['to-string-loader','style-loader', 'css-loader', 'sass-loader' ]
            }
        ]

    }
});