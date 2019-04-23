const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:'development', // 开发环境
    entry:"./src/index.js", //入口文件
    resolve: {
        alias: {
            "vue": "vue/dist/vue.esm.js"
        }
    },
    plugins:[
        //引入插件（const HtmlWebpackPlugin = require("html-webpack-plugin")）,并需要生产的html文件
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        })
    ],
	devServer:{
        open:true,//自动打开站点首页
        port:9000,//把默认端口号8080修改成9000
		inline:true
	}
}