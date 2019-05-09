const HtmlWebpackPlugin = require("html-webpack-plugin");
//1、引入
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    mode:'development',
    entry:'./src/app.js',
    resolve:{
        alias:{
            vue:'vue/dist/vue.esm.js',
        }
    },
    //2、添加Loader
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),
        //3、引入VueLoader插件
        new VueLoaderPlugin()
    ]
}