import type { RouteRecordRaw } from 'vue-router'
import type { AppRouteRecordRaw } from './types'
import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LAYOUT from '@/layouts/index.vue'
import FinaceView from '@/views/Finance/FinaceView.vue'

const routes: Array<AppRouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'home',
  //   redirect: '/login',
  //   // component: HomeView,
  //   meta: {
  //     title: 'home',
  //   },
  // },
  {
    path: '/',
    name: 'home',
    component: LAYOUT,
    redirect: '/finance',
    // component: HomeView,
    meta: {
      // title: 'home',
    },
    children: [
      {
        path: 'finance',
        name: 'finance',
        component: FinaceView,
        meta: {
          title: 'finance',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "index" */ '@/views/Login/LoginView.vue'),
    meta: {
      title: '登录',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[],
})

export default router
