<!-- <script lang="ts" setup></script> -->
<template>
  <button class="ButtonGreen"> ButtonGreed </button>
</template>

<style lang="less" scoped>
.ButtonGreen {
  // text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding: 0 23px;
  color: #fff;
  font-size: 23px;
  background-image: linear-gradient(180deg, #399cf1 0%, #4affc0 100%);
  box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.5),
    2px 2px 9px 0 rgba(0, 0, 0, 0.5);
  border-radius: @border-radius-base;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
}
</style>
