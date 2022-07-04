<script lang="ts" setup>
defineProps<{
  title: string
  noTitle?: boolean
}>()
</script>
<template>
  <div class="CardBox">
    <div v-if="!noTitle" class="title">{{ title }}</div>
    <div class="content"> <slot></slot> </div>
  </div>
</template>

<style lang="less" scoped>
.CardBox {
  background-color: #171e2d;
  box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
  border-radius: @border-radius-base;
  padding: 23px 38px;

  .title {
    font-size: 18px;
  }

  .content {
  }
}
</style>
