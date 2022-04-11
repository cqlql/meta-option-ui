import type { RouteRecordRaw } from 'vue-router'
import type { AppRouteRecordRaw } from './types'
import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () =>
    import(/* webpackChunkName: "index" */ '@/views/Login/LoginView.vue'),
  meta: {
    title: '登录',
  },
}

const routes: Array<AppRouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/login',
    // component: HomeView,
    meta: {
      title: 'home',
    },
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   meta: {
  //     title: 'about',
  //   },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
  LoginRoute,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[],
})

export default router
