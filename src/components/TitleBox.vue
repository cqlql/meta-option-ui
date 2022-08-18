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

<style lang="scss" scoped>
.TitleBox {
  border-radius: 13px;
  border: solid 1px #424b60;
  position: relative;
  padding: 10px;
}

.TitleBox_title {
  color: #898e9e;
  position: absolute;
  top: -8px;
  line-height: 1;
  font-size: 12px;
  padding: 0 2px;
  background-color: #262d3d;
}
.TitleBox_box {
}
</style>
