<script lang="ts" setup>
import AddMinusBar from './AddMinusBar.vue'
import Icon from '@/components/Icon/src/Icon.vue'
defineProps<{
  modelValue: string
}>()
defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

// const min = 0
// const max = 1000
// const step = 5
function minus() {
  // let v = Number(props.modelValue) - step
  // if (v < min) {
  //   v = min
  // }
  // emit('update:modelValue', String(v))
}
function add() {
  // let v = Number(props.modelValue) + step
  // if (v > max) {
  //   v = max
  // }
  // emit('update:modelValue', String(v))
}
</script>
<template>
  <AddMinusBar class="DownUpBar" @minus="minus" @add="add">
    <template #minus>
      <Icon icon="ic:baseline-keyboard-arrow-down"></Icon>
    </template>
    <template #middle>
      <div class="value">{{ modelValue }}</div>
    </template>
    <template #add>
      <Icon icon="ic:baseline-keyboard-arrow-up"></Icon>
    </template>
  </AddMinusBar>
</template>

<style lang="less" scoped>
.DownUpBar {
  .value {
    line-height: 46px;

    &:hover {
      background-color: #2f3a52;
      cursor: pointer;
    }
  }
}
</style>
