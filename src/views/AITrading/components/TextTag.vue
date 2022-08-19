<script lang="ts" setup>
defineProps<{
  color: string
}>()
</script>
<template>
  <div class="TextTag" :class="color"> <slot></slot> </div>
</template>

<style lang="less" scoped>
.TextTag {
  &.yellow {
    color: #ffce25;
  }
}
</style>
