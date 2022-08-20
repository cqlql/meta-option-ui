<script lang="ts" setup>
defineProps<{
  v: string
  d: string
}>()
</script>
<template>
  <div class="ValueDes">
    <div class="v">{{ v }}</div>
    <div class="d">{{ d }}</div>
  </div>
</template>

<style lang="less" scoped>
.ValueDes {
  display: inline-block;
  line-height: 1.2;
  text-align: right;

  .v {
  }

  .d {
    color: #898e9e;
    font-size: 12px;
  }
}
</style>
