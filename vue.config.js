module.exports = {
    outputDir:'cebbcc-h5-management',
    assetsDir:'cebbcc-h5-management',//静态文件
    lintOnSave:false,
    // 默认在生成的静态文件名中包含hash一控制缓存
    filenameHashing:true,
    productionSourceMap:false,//不显示源码
    // devServer: {
    //     Proxy: {
    //         '/': {
    //             target:'https://jsonplaceholder.typicode.com',//目标地址
    //             changeOrigin:true,//跨域
    //             ws:false,
    //             pathRewrite:{
    //                 "^/":'https://jsonplaceholder.typicode.com'
    //             }
    //         }
    //     }
    // }
}