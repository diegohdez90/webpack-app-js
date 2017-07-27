const {resolve} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
        context : resolve('src'),
        entry : {
            app: './app.js'
        },
        output : {
            path : resolve('dist'), 
            filename : 'bundle.[name].js'
        },
        plugins : [
            new HtmlWebpackPlugin({
                title : 'Bundle'
            })
        ]
    };
