<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>
<template>
  <div class="CardBox">
    <div class="title">{{ title }}</div>
    <div class="content"> <slot></slot> </div>
  </div>
</template>

<style lang="less" scoped>
.CardBox {
  background-color: #171e2d;
  box-shadow: 0 10px 58px 0 rgba(0, 0, 0, 0.24);
  border-radius: @border-radius-base;
  padding: 30px 50px;

  .title {
    font-size: 24px;
  }

  .content {
  }
}
</style>
