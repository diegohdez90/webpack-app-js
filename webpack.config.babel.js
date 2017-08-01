const path = require('path');
const webpack  = require('webpack');
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
                { test: /\.css$/,  loader: 'to-string-loader!css-loader' },                
                {
                    test : /\.js$/,
                    exclude : [path.resolve(__dirname,'node_modules')],
                    loader : 'babel-loader'
                }
            ]
        },

        resolve: {
            extensions: ['.ts', '.js', '.json']
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({ name: ['polyfills', 'vendor', 'main'].reverse(), minChunks: Infinity }),
             new HtmlWebpackPlugin({
                 template: 'src/index.html',
                title : 'Bundle'
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
