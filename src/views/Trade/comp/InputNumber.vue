<script lang="ts" setup>
import AddMinusBar from './AddMinusBar.vue'
// import Icon from '@/components/Icon/src/Icon.vue'
let reg = /^-?(\d+\.?\d*)?$/
const min = 0
const max = 1000
const step = 5
const props = defineProps<{
  noInput?: boolean
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

function minus() {
  let v = Number(props.modelValue) - step
  if (v < min) {
    v = min
  }
  emit('update:modelValue', String(v))
}
function add() {
  let v = Number(props.modelValue) + step
  if (v > max) {
    v = max
  }
  emit('update:modelValue', String(v))
}

function input(e: Event) {
  let target = e.target as HTMLInputElement
  let v = target.value

  let pass = reg.test(v)

  if (pass) {
    pass = Number(v) >= min
    if (pass) {
      emit('update:modelValue', v)
    } else {
      emit('update:modelValue', String(min))
    }
  } else {
    target.value = props.modelValue
  }
}
</script>
<template>
  <AddMinusBar class="InputNumber" @minus="minus" @add="add">
    <template #middle>
      <input type="text" :value="modelValue" @input="input" />
    </template>
  </AddMinusBar>
</template>

<style lang="less" scoped>
.InputNumber {
  input {
    width: 100%;
    height: 46px;
    text-align: center;
    background: transparent;
    border-radius: 0;

    &:focus {
      outline: 1px solid #40a9ff;
    }
  }
}
</style>
