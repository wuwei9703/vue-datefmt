
 var htmlWP = require('html-webpack-plugin');
module.exports = {
    entry:'./src/main.js', // 路径+文件名 一般为 ./src/xxx.js
    output:{
            path:__dirname+'/dist', // 绝对路径 使用__dirname + 路径
            filename:'build.js' // 一般都为build.js/bundle.js
    },
    module:{
        loaders:[
                {
                        test: /\.css$/,
                        loader:'style-loader!css-loader'
                },
                {
                        test: /\.scss$/,
                        loader:'style-loader!css-loader!sass-loader'
                },
                {
                        test: /\.less$/,
                        loader:'style-loader!css-loader!less-loader'
                },
                {
                        test: /\.(png|jpg|gif|ttf|svg)$/,
                        loader:'url-loader?limit=20000&name=images/[hash:8].[name].[ext]'
                        // limit单位是字节 1kb = 1024b(字节)
                        // 对于比较小的图片资源可以使用limit进行限制 
                        // 小于limit值转换成base64字符串内嵌到js代码中
                        // 大于limit值的图片才转成URL进行网络请求
                },
                // {
                //         test: /\.js$/,  // 将.js文件中的es6语法转成es5语法
                //         loader:'babel-loader',
                //         exclude:/node_modules/ // 排除node_modules文件夹下的js文件不用被转换
                // },
                {
                        test: /.vue$/,  // 解析 .vue 组件页面文件
                        loader:'vue-loader' 
                },
                {
                        test: /vue-preview.src.*?js$/,  // vue-preivew组件专用
                        loader: 'babel-loader'
                }
        ]
    },
//     babel:{
//         presets:['es2015'],  // 配置将es6语法转换成es5语法
//         plugins:['transform-runtime'] // 用来解析vue文件
//         },
    plugins:[
        new htmlWP({
                title: '首页',  //生成的页面标题
                filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
                template: 'webpack.html' //根据template.html这个模板来生成(这个文件程序员自己书写)
        })
    ]

}