<script lang="ts" setup>
defineProps<{
  label: string
}>()
</script>
<template>
  <div class="LabelValueLine">
    <span class="t">
      {{ label }}
    </span>
    <span class="v">
      <slot></slot>
    </span>
  </div>
</template>

<style lang="less" scoped>
.LabelValueLine {
  display: flex;
  border-bottom: 1px solid #424b60;
  line-height: 34px;
  padding: 0 12px;
  font-size: 16px;

  .t {
    flex: 1;
  }

  .v {
  }
}
</style>
