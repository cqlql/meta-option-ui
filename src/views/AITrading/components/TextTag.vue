<script lang="ts" setup>
defineProps<{
  color?: string
}>()
</script>
<template>
  <div class="TextTag" :class="color"> <slot></slot> </div>
</template>

<style lang="less" scoped>
.TextTag {
  line-height: 18px;
  padding: 0 8px;
  font-size: 12px;
  text-align: center;
  border-radius: 10px;
  background-color: #424b60;

  &.yellow {
    color: #ffce25;
    background-color: rgba(255, 208, 37, 0.2);
  }

  &.green {
    color: #04af58;
    background-color: rgba(4, 175, 87, 0.2);
  }
}
</style>
