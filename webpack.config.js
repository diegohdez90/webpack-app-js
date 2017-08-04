const path = require('path');
const webpack  = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
        cache: true,
        entry : {
            app: './src/main',
            polyfills: './src/polyfills',
            vendor:  './src/vendor',
        },
        output : {
            path : path.join(__dirname,'dist'), 
            filename : 'bundle.[name].js',
            sourceMapFilename: '[name].map',
            chunkFilename: '[id].chunk.js'
        },
        devtool : 'source-map',
        module: {
            loaders : [
                { test: /\.ts$/,   loader: 'awesome-typescript-loader' },
                { test: /\.json$/, loader: 'json-loader' },
                { test: /\.html/,  loader: 'raw-loader' },
                { test: /\.css$/,  loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use:['css-loader']})
                },
                {
                    test : /\.js$/,
                    exclude : [path.resolve(__dirname,'./node_modules')],
                    loader : 'babel-loader'
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                        },
                    }],
                    include: path.resolve(__dirname, 'src', 'fonts'), }
            ]
        },

        resolve: {
            extensions: ['.ts', '.js', '.json', 'css']
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({ name: ['polyfills', 'vendor', 'main'].reverse(), minChunks: Infinity }),
            new ExtractTextPlugin('styles.[name].[chunkhash].css', 'styles.[name].css'),
            new HtmlWebpackPlugin({
                 template: 'src/index.html',
                title : 'Bundle',
                inject: 'head',
            })
        ],
        devServer: {
            historyApiFallback: true,
            watchOptions: { aggregateTimeout: 300, poll: 1000 }
        },
        node: {
            global: true,
            process: true,
            Buffer: false,
            crypto: 'empty',
            module: false,
            clearImmediate: false,
            setImmediate: false,
            clearTimeout: true,
            setTimeout: true
        }
    };
