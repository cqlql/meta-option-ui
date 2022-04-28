<script lang="ts" setup>
import ColorSelect from './ColorSelect.vue'
import WidthSelect from './WidthSelect.vue'
import { InputNumber as AInputNumber, Select as ASelect } from 'ant-design-vue'
import IndicatorsSetting from './IndicatorsSetting.vue'

// defineEmits<{
//   (e: 'cancel'): void
// }>()
const typeOptions = [
  {
    value: 'EMA',
  },
  {
    value: 'SMA',
  },
  {
    value: 'SMMA',
  },
  {
    value: 'WMA',
  },
]
</script>
<template>
  <IndicatorsSetting v-bind="$attrs">
    <div class="row full">
      <div class="cell">
        <div class="label"> Period </div>
        <div class="ipt">
          <a-input-number :min="1" :max="10" />
        </div>
      </div>
      <div class="cell">
        <div class="label"> Type </div>
        <div class="ipt">
          <a-select :options="typeOptions" />
        </div>
      </div>
      <div class="cell">
        <div class="label"> Color </div>
        <div class="ipt">
          <ColorSelect />
        </div>
      </div>
      <div class="cell">
        <div class="label"> Width </div>
        <div class="ipt">
          <WidthSelect />
        </div>
      </div>
    </div>
  </IndicatorsSetting>
</template>
