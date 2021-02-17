
module.exports = {
  // publicPath: "/ui/eswap-ui/",
  lintOnSave: false,
  devServer: {
    host: "localhost",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy: {
      "/api": {
        //代理api
        target: "http://10.253.48.30", //线上服务器api地址
        ws: true, // proxy websockets
        changeOrigin: true, //是否跨域
        pathRewrite: {
          //重写路径
          "^/api": ""
        }
        // logLevel: "debug"
      }
    }
  },
  css: {
    loaderOptions: {
      // sass: {
      //   prependData: `@import "~@/sass/_variable.sass";`
      // }
      less: {
        additionalData: `@import "~@/less/_variable.less";`
      }
    }
  },
  // 分析包工具
  chainWebpack: config => {
    if (process.env.use_analyzer) {     // 分析
        config
            .plugin('webpack-bundle-analyzer')
            .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
};
