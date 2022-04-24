import type { Router } from 'vue-router'
import nProgress from 'nprogress'
// import 'nprogress/nprogress.css' // progress bar style
nProgress.configure({ showSpinner: false }) // NProgress Configuration

export function setupRouterGuard(router: Router) {
  createProgressGuard(router)
  // createScrollGuard(router)
  // createPermissionGuard(router)
}

// Routing switch back to the top
// function createScrollGuard(router: Router) {
//   const body = document.getElementById('app')

//   router.afterEach(async () => {
//     // scroll top
//     body?.scrollTo(0, 0)
//     return true
//   })
// }

// async function createPermissionGuard(router: Router) {
//   router.beforeEach(async (to, from, next) => {
//     next()
//   })
// }

export function createProgressGuard(router: Router) {
  router.beforeEach(async () => {
    nProgress.start()
    return true
  })

  router.afterEach(async () => {
    nProgress.done()
    return true
  })
}
