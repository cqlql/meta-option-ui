<script lang="ts" setup>
defineProps<{
  no: string
  text: string
}>()
</script>
<template>
  <div class="MultiText">
    <div class="no">{{ no }}.</div>
    <div class="r">
      <div class="text">
        {{ text }}
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.MultiText {
  display: flex;

  .no {
  }

  .r {
  }
}
</style>
