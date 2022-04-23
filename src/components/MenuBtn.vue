<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(false)
</script>
<template>
  <div class="MenuBtn" :class="{ active }" @click="active = !active">
    <span></span>
  </div>
</template>

<style lang="less" scoped>
.MenuBtn {
  position: relative;
  // position: absolute;
  // top: 0;
  // right: 0;
  display: block;
  width: 38px;
  height: 38px;
  // line-height: 57px;
  text-align: center;
  // background-color: #121929;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.05);
  }

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: 26px;
    height: 3px;
    // background: #3099f5;
    // background-image: linear-gradient(0deg, #db9c1f 0%, #fff1ac 100%);
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin-left: -13px;
    margin-top: -2.166666666666667px;
    transition: background 0s cubic-bezier(0.46, 0.43, 0.26, 1.49) 0.15s;
    border-radius: 2px;

    &::after,
    &::before {
      content: '';
      position: absolute;
      left: 0;
      display: block;
      width: 100%;
      height: 3px;
      // background-image: linear-gradient(0deg, #db9c1f 0%, #fff1ac 100%);
      background: #fff;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      transition-timing-function: cubic-bezier(0.46, 0.43, 0.26, 1.49);
      transition-duration: 0.15s, 0.15s;
      transition-delay: 0.15s, 0s;
      border-radius: 2px;
    }

    &::before {
      top: -8.8px;
      transition-property: top, transform;
    }

    &::after {
      bottom: -8.8px;
      transition-property: bottom, transform;
    }
  }

  &.active span {
    background: none;
    transition-timing-function: cubic-bezier(1.49, 0.26, 0.43, 0.46);
    box-shadow: none;
  }

  &.active span::after,
  &.active span::before {
    transition-delay: 0s, 0.15s;
    transition-timing-function: cubic-bezier(1.49, 0.26, 0.43, 0.46);
  }

  &.active span::before {
    top: 0;
    transform: rotate(45deg);
  }

  &.active span::after {
    bottom: 0;
    transform: rotate(-45deg);
  }
}
</style>
