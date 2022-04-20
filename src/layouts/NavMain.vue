<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import IconFont from '@/components/IconFont/IconFont.vue'
type ItemType = {
  name: string
  icon: string
  routeName: string
}
const router = useRouter()
const route = useRoute()

const selectedRoute = ref(route.name)

const list: ItemType[] = [
  {
    name: 'Trade',
    icon: 'rise',
    routeName: 'Trade',
  },
  {
    name: 'Finance',
    icon: 'finance',
    routeName: 'Finance',
  },
  {
    name: 'Deal',
    icon: 'deal',
    routeName: 'Deal',
  },
  // {
  //   name: 'Home',
  //   icon: 'home',
  //   routeName: 'Home',
  // },
  // {
  //   name: 'About us',
  //   icon: 'info',
  //   routeName: 'AboutUs',
  // },
  {
    name: 'News',
    icon: 'internet',
    routeName: 'News',
  },
  {
    name: 'Setting',
    icon: 'setting',
    routeName: 'Setting',
  },
]

function to(item: ItemType) {
  selectedRoute.value = item.routeName
  router.push({
    name: item.routeName,
  })
}
</script>
<template>
  <nav class="nav-main">
    <a
      v-for="(item, index) of list"
      :key="index"
      class="item"
      :class="{ active: selectedRoute === item.routeName }"
      href="javascript:;"
      @click="to(item)"
    >
      <i> <IconFont :name="item.icon"></IconFont> </i>
      <span class="name">{{ item.name }}</span>
    </a>
  </nav>
</template>

<style lang="less" scoped>
.nav-main {
  & > .item {
    position: relative;
    display: block;
    display: flex;
    justify-content: center;
    width: 80px;
    height: 80px;
    color: #7d8da1;
    text-align: center;
    cursor: pointer;
    flex-direction: column;

    &::before {
      position: absolute;
      left: -3px;
      top: 0;
      display: block;
      width: 3px;
      height: 100%;
      content: '';
      opacity: 0;
      background-color: @primary-color;
      transition: opacity 0.3s, left 0.3s, right 0.3s;
    }

    &.active {
      color: @primary-color;

      &::before {
        opacity: 1;
        left: 0;
      }

      .name {
        color: #fff;
      }
    }

    i {
      // display: flex;
      // align-items: flex-end;
      // justify-content: center;
      // height: 45px;

      padding-top: 2px;
    }

    .iconfont {
      font-size: 24px;
    }

    .app-iconify {
      display: block;
    }

    .name {
      display: block;
      font-size: 12px;
      transition: color 0.3s;
      padding-top: 2px;
    }
  }
}
</style>
