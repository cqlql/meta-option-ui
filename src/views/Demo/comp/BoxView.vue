<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>
<template>
  <div class="BoxView">
    <div v-if="title" style="margin: 8px 0 5px">{{ title }}</div>
    <div class="BoxView_container"> <slot></slot> </div>
  </div>
</template>

<style lang="less">
.BoxView {
  margin: 15px;
}

.BoxView_container {
  padding: 8px;
  // border: 1px solid rgb(235, 235, 235);
  // border: 1px solid #720808;
  margin-bottom: 8px;
}
</style>
