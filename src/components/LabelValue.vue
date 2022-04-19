<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>
<template>
  <div class="LabelValue">
    <span>{{ title }}</span>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style lang="less" scoped>
.LabelValue {
  display: flex;
  height: 45px;
  line-height: 45px;
  background-color: #020220;
  border-radius: @border-radius-base;
  border: solid 2px #333d51;
  font-size: 18px;

  & > span {
    padding: 0 23px;
    color: #fff;

    &:first-child {
      border-right: solid 2px #333d51;
      color: #a2a9bb;
    }
  }
}
</style>
