<script lang="ts" setup>
import { Select as ASelect } from 'ant-design-vue'
const ASelectOption = ASelect.Option
const options = [
  {
    value: 'rgb(255, 255, 255)',
  },
  {
    value: 'rgb(240, 197, 47)',
  },
  {
    value: 'rgb(229, 128, 49)',
  },
  {
    value: 'rgb(230, 80, 67)',
  },
  {
    value: 'rgb(210, 87, 27)',
  },
  {
    value: 'rgb(45, 127, 183)',
  },
  {
    value: 'rgb(154, 90, 180)',
  },
  {
    value: 'rgb(110, 205, 89)',
  },
]
</script>
<template>
  <a-select
    :class="$style.select"
    :dropdownClassName="$style.select"
    optionLabelProp="children"
  >
    <a-select-option
      v-for="item of options"
      :key="item.value"
      :value="item.value"
    >
      <div class="colorItem">
        <div :style="'background-color:' + item.value"></div>
      </div>
    </a-select-option>
  </a-select>
</template>

<style lang="less" module>
.select {
  :global {
    .colorItem {
      padding: 6px;

      div {
        height: 18px;
      }
    }

    .ant-select-item {
      padding: 0;
    }
  }
}
</style>

<style lang="less" scoped>
.ant-select {
  display: block;
}
</style>
