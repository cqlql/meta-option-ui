<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>
<template>
  <div class="LabelInput">
    <span>{{ title }}</span>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style lang="less" scoped>
.LabelInput {
  display: flex;
  height: 60px;
  line-height: 60px;
  background-color: #020220;
  border-radius: 6px;
  border: solid 2px #333d51;
  font-size: 24px;

  & > span {
    padding: 0 30px;
    color: #fff;

    &:first-child {
      border-right: solid 2px #333d51;
      color: #a2a9bb;
    }
  }
}
</style>
