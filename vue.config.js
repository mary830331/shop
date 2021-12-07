module.exports = {
  publicPath: './',
  chainWebpack (config) {
    config.plugin('html').tap(args => {
      args[0].title = '迷克夏SHOP'
      return args
    })
  }
}
