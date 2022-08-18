import { defaultTheme } from '@vuepress/theme-default'
import navbarConfig from './utils/nav-data-generate'

console.log('🚀 -- navbarConfig', navbarConfig)
export default {
  title: 'Hello VuePress',
  description: 'Just playing around',

  theme: defaultTheme({
    sidebar: navbarConfig,
  }),
}
