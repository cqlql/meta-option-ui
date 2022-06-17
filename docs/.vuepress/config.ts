import vueJsx from '@vitejs/plugin-vue-jsx'
import { UserConfig, viteBundler } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import theme from './theme'

interface Config extends Omit<UserConfig, 'base'> {
  base: string
}

function defineConfig(config: Config) {
  return config
}

export default defineConfig({
  port: 3002,
  lang: 'zh-CN',
  title: '开发文档',
  // description: 'welcome',

  base: `/docs`,

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
    ['link', { rel: 'icon', href: 'http://meta.cqlql.top/favicon.ico' }],
  ],
  alias: {
    '@': __dirname,
  },

  theme,
  plugins: [searchPlugin()],

  bundler: viteBundler({
    viteOptions: {
      plugins: [
        vueJsx({
          // options are passed on to @vue/babel-plugin-jsx
        }),
      ],
    },
  }),
})
