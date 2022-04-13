<script lang="ts" setup></script>
<template>
  <div class="DemoContainer">
    <div class="bg"></div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.DemoContainer {
  color: #fff;

  .bg {
    position: fixed;
    background-color: #0a0e37;
    inset: 0;
  }

  .content {
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
