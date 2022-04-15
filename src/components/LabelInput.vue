<script lang="ts" setup>
defineProps<{
  value: string
  title?: string
}>()
</script>
<template>
  <div class="LabelInput">
    <span class="label">
      {{ title }}
      <slot name="title"></slot>
    </span>
    <span class="ipt">
      <a-input type="text" :value="value" />
    </span>
  </div>
</template>

<style lang="less" scoped>
.LabelInput {
  display: flex;
  height: 60px;
  line-height: 56px;
  border-radius: @border-radius-base;
  border: solid 2px #333d51;
  font-size: 24px;

  & > .label {
    padding: 0 30px;
    color: #fff;
    color: #a2a9bb;
    border-right: solid 2px #333d51;
    background-color: #21293a;
  }

  & > .ipt {
    display: flex;
    flex: 1;

    input {
      // width: 100%;
      font-size: 24px;
      border: none;
      background-color: #263042;
    }
  }
}
</style>
