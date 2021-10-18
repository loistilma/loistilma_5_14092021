const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    mode: 'production',

    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared',
        },
        
        product: {
            import: './src/product.js',
            dependOn: 'shared',
        },

        cart: {
            import: './src/cart.js',
            dependOn: 'shared',
        },

        confirmation: {
            import: './src/confirmation.js',
            dependOn: 'shared',
        },

        shared: {
            import: './src/shared.js',
        },

    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        clean: {     
            keep: /\.(png|ico)$/i, // Do not clean this files.
        },
    },

    module: {
        rules: [
        /*
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        */
       
        {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'fonts/[name][ext]'
            }
        },

        {
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                  loader: "sass-loader",
                  options: {
                    implementation: require("sass"),
                  },
                },
            ],
        },
        {
            test: /\.pug$/,
            use: [
                { loader: 'pug3-loader' },
            ]
        }
        ]
    },
    /*
    resolve: {
        extensions: ['*', '.js']
    },
    */
    plugins: [

        new MiniCssExtractPlugin({
            filename: "stylesheets/[name].css",
        }),
        
        new HtmlWebpackPlugin({
            template : 'src/views/index.pug',
            inject   : 'body',
            filename: 'index.html',
            chunks: ['index', 'shared'],
        }),
        
        new HtmlWebpackPlugin({
            template : 'src/views/product.pug',
            inject   : 'body',
            filename: 'produit.html',
            chunks: ['product', 'shared'],
        }),
        new HtmlWebpackPlugin({
            template : 'src/views/cart.pug',
            inject   : 'body',
            filename: 'panier.html',
            chunks: ['cart', 'shared'],
        }),

        new HtmlWebpackPlugin({
            template : 'src/views/confirmation.pug',
            inject   : 'body',
            filename: 'confirmation.html',
            chunks: ['confirmation', 'shared'],
        }),

    ],
}