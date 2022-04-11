import '@/style/index.less'
import 'windi.css'
import { createApp } from 'vue'
import App from './App.vue'
import registerGlobComp from './registerGlobComp'
import router from './router'
// import store from './store'

async function bootstrap() {
  const app = createApp(App)

  app.use(router)

  // Register global components
  registerGlobComp(app)

  app.mount('#app')
}

bootstrap()
