const path = require('path')
const getLessVariables = require('./build/getLessVariables')
const cssVariate = getLessVariables(
  path.relative(__dirname, 'src/style/variate.less'),
)
console.log('🚀 -- cssVariate', cssVariate)
module.exports = {
  productionSourceMap: false,
  publicPath: '',
  css: {
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
}
