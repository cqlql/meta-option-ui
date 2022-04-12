const path = require('path')
const getLessVariables = require('./build/getLessVariables')
module.exports = {
  productionSourceMap: false,
  publicPath: '',
  css: {
    extract: false,
    loaderOptions: {
      less: {
        lessOptions: {
          globalVars: getLessVariables(
            path.relative(__dirname, 'src/style/color.less'),
          ),
        },
      },
    },
  },
}
