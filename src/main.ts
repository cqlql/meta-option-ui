import '@/style/index.less'
import 'windi.css'
import { createApp } from 'vue'
import App from './App.vue'
import registerGlobComp from './registerGlobComp'
import router from './router'
import { setupRouterGuard } from './router/guard'
// import store from './store'

async function bootstrap() {
  const app = createApp(App)

  app.use(router)

  // Register global components
  registerGlobComp(app)

  // router-guard
  setupRouterGuard(router)

  app.mount('#app')
}

bootstrap()
