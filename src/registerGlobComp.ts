import type { App } from 'vue'
// 全局组件
// import VNodes from '@/components/VNodes'
// import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon'

import {
  Input,
  Layout,
  Button,
  Form,
  Radio,
  Row,
  Col,
  Checkbox,
} from 'ant-design-vue'

export default function registerGlobComp(app: App) {
  app
    /* 自定义组件 */
    // .component('VNodes', VNodes)
    // .component('VButton', Button)
    .component('VIcon', Icon)

    /* ant 组件 */
    .use(Input)
    .use(Button)
    .use(Layout)
    .use(Form)
    .use(Radio)
    .use(Row)
    .use(Col)
    .use(Checkbox)
}
