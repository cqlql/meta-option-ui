<script lang="ts" setup>
defineProps<{
  value: string
  title?: string
}>()
defineEmits<{
  (e: 'update:value', v: string): void
}>()
</script>
<template>
  <div class="LabelInput">
    <span class="label">
      {{ title }}
      <slot name="title"></slot>
    </span>
    <span class="ipt">
      <a-input
        type="text"
        :value="value"
        @update:value="(v:string) => $emit('update:value', v)"
      />
    </span>
  </div>
</template>

<style lang="less" scoped>
.LabelInput {
  display: flex;
  height: 45px;
  line-height: 42px;
  border-radius: @border-radius-base;
  border: solid 1px #333d51;
  font-size: 18px;

  & > .label {
    padding: 0 23px;
    color: #fff;
    color: #a2a9bb;
    border-right: solid 1px #333d51;
    background-color: #21293a;
  }

  & > .ipt {
    display: flex;
    flex: 1;

    input {
      // width: 100%;
      font-size: 18px;
      border: none;
      background-color: #263042;
    }
  }
}
</style>
