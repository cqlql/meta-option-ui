<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>
<template>
  <div class="TitleBox">
    <div class="TitleBox_title">
      {{ title }}
    </div>
    <div class="TitleBox_box">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.TitleBox {
  border-radius: 13px;
  border: solid 1px #424b60;
  position: relative;
  padding: 10px;
}

.TitleBox_title {
  position: absolute;
  top: -7px;
  line-height: 1;
  padding: 0 2px;
  color: #898e9e;
  font-size: 12px;
  background-color: #262d3d;
}

.TitleBox_box {
}
</style>
