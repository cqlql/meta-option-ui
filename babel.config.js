module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',

      // `style: true` 会加载 less 文件
      // `style: 'css'` 会直接使用编译好的 css 文件
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true },
    ],
  ],
}
