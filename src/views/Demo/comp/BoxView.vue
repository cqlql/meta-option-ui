<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>
<template>
  <div class="BoxView">
    <div v-if="title" style="margin: 10px 0 6px">{{ title }}</div>
    <div class="BoxView_container"> <slot></slot> </div>
  </div>
</template>

<style lang="less">
.BoxView {
  margin: 20px;
}

.BoxView_container {
  padding: 10px;
  // border: 1px solid rgb(235, 235, 235);
  // border: 1px solid #720808;
  margin-bottom: 10px;
}
</style>
