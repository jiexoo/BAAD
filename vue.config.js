module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '//cdn.jsdelivr.net/gh/chanshiyucx/chanshiyucx.github.io/' : '/',
  chainWebpack(config) {
    const cdn = {
      css: ['//fonts.googleapis.com/css?family=Fira+Mono|Noto+Serif+SC&display=swap'],
      js: [
        '//cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js',
        '//cdn.jsdelivr.net/npm/jquery-backstretch@2.1.17/jquery.backstretch.min.js'
      ]
    }
    config.plugin('html').tap(args => {
      args[0].cdn = cdn
      return args
    })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/styles/variables.scss";
          @import "~@/styles/mixin.scss";
        `
      }
    }
  }
}
