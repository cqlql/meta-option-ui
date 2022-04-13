import type { RouteRecordRaw } from 'vue-router'
import type { AppRouteRecordRaw } from './types'
import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LAYOUT from '@/layouts/index.vue'
import LoginView from '@/views/Login/LoginView.vue'

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
        path: 'trade',
        name: 'trade',
        component: () =>
          import(/* webpackChunkName: "index" */ '@/views/Trade/TradeView.vue'),
        meta: {
          title: 'Trade',
        },
      },
      {
        path: 'finance',
        name: 'finance',
        component: () =>
          import(
            /* webpackChunkName: "index" */ '@/views/Finance/FinaceView.vue'
          ),
        meta: {
          title: 'finance',
        },
      },
      {
        path: 'deal',
        name: 'deal',
        component: () =>
          import(/* webpackChunkName: "index" */ '@/views/Deal/DealView.vue'),
        meta: {
          title: 'deal',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      title: '登录',
    },
  },
]

if(process.env.NODE_ENV !== 'production') {
  routes.push({
    path: '/demo',
    name: 'demo',
    component: ()=>import('@/views/Demo/DemoLot.vue'),
    meta: {
      title: 'demo',
    },
  })
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[],
})

export default router
