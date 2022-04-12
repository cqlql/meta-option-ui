<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
    icon: 'ant-design:rise-outlined',
    routeName: 'trade',
  },
  {
    name: 'Finance',
    icon: 'ri:money-dollar-circle-fill',
    routeName: 'finance',
  },
  {
    name: 'Deal',
    icon: 'fa6-solid:handshake',
    routeName: 'deal',
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
      <i> <Icon :icon="item.icon"></Icon> </i>
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
    width: 110px;
    height: 110px;
    color: #7d8da1;
    text-align: center;
    cursor: pointer;
    flex-direction: column;

    &::before {
      position: absolute;
      left: -4px;
      top: 0;
      display: block;
      width: 4px;
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
    }

    i {
      // display: flex;
      // align-items: flex-end;
      // justify-content: center;
      // height: 60px;
      font-size: 38px;
    }

    .app-iconify {
      display: block;
    }

    .name {
      display: block;
      font-size: 14px;
    }
  }
}
</style>
