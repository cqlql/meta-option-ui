<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>
<template>
  <div class="BoxView">
    <div class="BoxView_title" v-if="title">{{ title }}</div>
    <div class="BoxView_container"> <slot></slot> </div>
  </div>
</template>

<style lang="less">
.BoxView {
  // margin: -1px;
  border: 1px solid #ffffff21;
}

.BoxView_title {
  padding: 0 10px 5px;
  color: #ffffff91;
  font-size: 16px;
  border-bottom: 1px solid #ffffff21;
}

.BoxView_container {
  padding: 8px;
  // border: 1px solid rgb(235, 235, 235);
  // border: 1px solid #720808;
  margin-bottom: 8px;
}
</style>
