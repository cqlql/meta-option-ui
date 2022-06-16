import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  hostname: 'http://docs.cqlql.top',
  author: {
    name: 'Mr.Joly',
    url: '',
  },

  iconPrefix: 'iconfont icon-',

  // gitee
  repo: 'https://gitee.com/cqlql/meta-option-ui.git',
  editLinkPattern: 'https://gitee.com/cqlql/meta-option-ui/edit/docs/docs/:path',

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  displayFooter: true,

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag'],
})
