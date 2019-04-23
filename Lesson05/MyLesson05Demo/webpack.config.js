const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:'development', // 开发环境
    entry:"./src/index.js", //入口文件
 
    plugins:[
        //引入插件（const HtmlWebpackPlugin = require("html-webpack-plugin")）,并需要生产的html文件
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        })
    ]
}