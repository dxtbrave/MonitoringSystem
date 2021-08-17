module.exports ={
    configureWebpack:{
        resolve:{
            // 设置别名
            alias:{
                'assets':'@/assets',
                // 'common':'@/common',
                // 'components':'@/components',
                // 'network':'@/network',
                // 'views':'@/views',
            }
        }
    },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '风机组监控'
        return args
      })
  }
}