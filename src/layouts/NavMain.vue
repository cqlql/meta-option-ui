<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
</script>
<template>
  <nav class="nav-main">
    <a class="item trade active" href="/">
      <i> <Icon icon="ant-design:rise-outlined"></Icon> </i>
      <span class="name">Trade</span>
    </a>
    <a class="item finance" href="/">
      <i> <Icon icon="icon-park-outline:funds"></Icon> </i>
      <span class="name">Finance</span>
    </a>
    <a class="item finance" href="/">
      <i> <Icon icon="fa6-solid:handshake"></Icon> </i>
      <span class="name">Finance</span>
    </a>
  </nav>
</template>

<style lang="less" scoped>
.nav-main {
  & > .item {
    position: relative;
    display: block;
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
      background-color: #3099f5;
      transition: opacity 0.3s, left 0.3s, right 0.3s;
    }

    &.active::before {
      opacity: 1;
      left: 0;
    }

    i {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      height: 60px;
      font-size: 38px;
    }

    .name {
      display: block;
      font-size: 14px;
    }
  }
}
</style>
