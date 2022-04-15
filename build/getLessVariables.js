const fs = require('fs')
module.exports = function getLessVariables(file) {
  const themeContent = fs.readFileSync(file, 'utf-8')
  const variables = {}
  themeContent.split('\n').forEach(function (item) {
    const _pair = item
      .replace(/\/\/.*/, '')
      .replace(/\/\*[\s\S]*?\*\//, '')
      .split(':')
    if (_pair.length < 2) return
    const key = _pair[0].replace('\r', '').replace('@', '')
    if (!key) return
    const value = _pair[1]
      .replace(';', '')
      .replace('\r', '')
      .replace(/^\s+|\s+$/g, '')
    variables[key] = value
  })
  return variables
}
