<script lang="ts" setup>
defineProps<{
  color?: 'yellow' | 'green'
  shape?: 'round'
}>()
</script>
<template>
  <div class="TextTag" :class="[color, shape]"> <slot></slot> </div>
</template>

<style lang="less" scoped>
.TextTag {
  line-height: 18px;
  padding: 1px 4px;
  font-size: 12px;
  text-align: center;
  background-color: #424b60;
  border-radius: 4px;

  &.round {
    padding: 0 8px;
    border-radius: 10px;
  }

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
