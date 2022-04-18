const path = require('path')
const getLessVariables = require('./build/getLessVariables')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const cssVariate = getLessVariables(resolve('src/style/variate.less'))
module.exports = {
  productionSourceMap: false,
  publicPath: '',
  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    extract: false,
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: cssVariate,
          globalVars: cssVariate,
        },
      },
    },
  },
  chainWebpack: (config) => {
    // set svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/assets/svg')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
}
