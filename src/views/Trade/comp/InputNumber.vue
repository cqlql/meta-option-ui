<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
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
  <div class="InputNumber">
    <div class="action left" @mousedown.prevent @click="minus">
      <Icon icon="ic:baseline-minus"></Icon>
    </div>
    <div class="middle" :class="{ noInput }">
      <span class="value" v-if="noInput">{{ modelValue }}</span>
      <input v-else type="text" :value="modelValue" @input="input" />
    </div>
    <div class="action right" @mousedown.prevent @click="add">
      <Icon icon="ic:baseline-add"></Icon>
    </div>
  </div>
</template>

<style lang="less" scoped>
.InputNumber {
  display: flex;
  border: 1px solid #424b60;
  border-radius: 4px;

  .action {
    width: 46px;
    height: 46px;
    line-height: 46px;
    font-size: 22px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #2f3a52;
    }
  }

  .left {
  }

  .right {
  }

  .middle {
    flex: 1;
    border: 1px solid #414a60;
    border-top: none;
    border-bottom: none;
    text-align: center;

    .value {
      line-height: 46px;
    }

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
}
</style>
