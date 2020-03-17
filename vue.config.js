module.exports = {
    publicPath:'./',
    configureWebpack:{
        resolve: {
            alias: {
              'assets': '@/assets',
              'common': '@/common',
              'components': '@/components',
              'network': '@/network',
              'views': '@/views',
              'plugins': '@/plugins',
            }
          }
    },
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 8066,
        https: false,
        hotOnly: false,
        /* 使用代理 */
        proxy: {
            '/api': {
                /* 目标代理服务器地址 */
                target: 'https://iwsapi.51autoshop.com/',
                /* 允许跨域 */
                changeOrigin: true,
            },
        },
    }
}