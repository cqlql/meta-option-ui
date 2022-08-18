import type { RouteRecordRaw } from 'vue-router'
import type { AppRouteRecordRaw } from './types'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import LAYOUT from '@/layouts/index.vue'
import LoginView from '@/views/Login/LoginView.vue'
import LoadingView from '@/views/LoadingView.vue'

const routes: Array<AppRouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: LAYOUT,
    redirect: '/home',
    meta: {},
    children: [
      {
        path: 'trade',
        name: 'Trade',
        component: () =>
          import(/* webpackChunkName: "index" */ '@/views/Trade/TradeView.vue'),
        meta: {
          title: 'Trade',
        },
      },
      {
        path: 'aitrading',
        name: 'AITrading',
        component: () =>
          import(
            /* webpackChunkName: "index" */ '@/views/AITrading/AITrading.vue'
          ),
        meta: {
          title: 'Trade',
        },
      },
      {
        path: 'finance',
        name: 'Finance',
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
        name: 'Deal',
        component: () =>
          import(/* webpackChunkName: "index" */ '@/views/Deal/DealView.vue'),
        meta: {
          title: 'deal',
        },
      },
      // {
      //   path: 'home',
      //   name: 'Home',
      //   component: () =>
      //     import(/* webpackChunkName: "index" */ '@/views/Home/HomeView.vue'),
      //   meta: {
      //     title: 'home',
      //   },
      // },
      {
        path: 'aboutus',
        name: 'AboutUs',
        component: () =>
          import(/* webpackChunkName: "index" */ '@/views/AboutUS/AboutUS.vue'),
        meta: {
          title: 'about us',
        },
      },
      {
        path: 'news',
        name: 'News',
        component: () =>
          import(/* webpackChunkName: "index" */ '@/views/News/NewsView.vue'),
        meta: {
          title: 'News',
        },
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () =>
          import(
            /* webpackChunkName: "index" */ '@/views/SettingView/SettingView.vue'
          ),
        meta: {
          title: 'setting',
        },
      },
    ],
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'home',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      title: '登录',
    },
  },
  {
    path: '/loading',
    name: 'Loading',
    component: LoadingView,
    meta: {
      title: 'loading',
    },
  },
]

// if(process.env.NODE_ENV !== 'production') {
routes.push({
  path: '/demo',
  name: 'demo',
  component: () => import('@/views/Demo/DemoLot.vue'),
  meta: {
    title: 'demo',
  },
})
// }

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[],
})

export default router
