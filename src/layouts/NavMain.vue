<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
import { ref } from 'vue'

const selectedIndex = ref(0)

const list = [
  {
    name: 'Trade',
    icon: 'ant-design:rise-outlined',
  },
  {
    name: 'Finance',
    icon: 'icon-park-outline:funds',
  },
  {
    name: 'Finance',
    icon: 'fa6-solid:handshake',
  },
]
</script>
<template>
  <nav class="nav-main">
    <a
      v-for="(item, index) of list"
      :key="index"
      class="item"
      :class="{ active: selectedIndex === index }"
      href="javascript:;"
      @click="selectedIndex = index"
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
    width: 110px;
    height: 110px;
    color: #7d8da1;
    text-align: center;
    cursor: pointer;

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
