const path = require('path')
const { getThemeVariables } = require('ant-design-vue/dist/theme')
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
          globalVars: cssVariate,

          modifyVars: {
            ...getThemeVariables({
              dark: true, // 开启暗黑模式
            }),
            ...cssVariate,
          },
          javascriptEnabled: true,
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
