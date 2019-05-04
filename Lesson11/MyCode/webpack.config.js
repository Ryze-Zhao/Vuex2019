//1、引入插件
const HtmlWebpackPlugin = require("html-webpack-plugin")

//2、编写
module.exports = {
    //3、设置为开发模式
    mode:'development',
    //4、入口文件
    entry:'./src/main.js',
    //5、解决使用vue时，打包后会报You are using the runtime-only build of Vue where the template compiler is not available.
    resolve:{
        alias:{
            vue:'vue/dist/vue.esm.js',
        }
    },
    //6、使用插件，设置生成的，模板文件
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        })
    ]
}