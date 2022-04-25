<script lang="ts" setup>
import { ref } from 'vue'
import { Select as ASelect } from 'ant-design-vue'
import IconFont from '@/components/IconFont/IconFont.vue'

const assetValue = ref('EUR/USD')
const options = [
  {
    value: 'EUR/USD',
  },
  {
    value: 'EUR/GBP',
  },
]
</script>
<template>
  <div class="TradeView">
    <div class="chart-settings">
      <div class="cell">
        <a-select
          v-model:value="assetValue"
          style="width: 200px"
          :options="options"
        ></a-select>
      </div>
      <div class="cell">
        <IconFont name="setting"></IconFont>
      </div>
      <div class="cell">
        <IconFont name="setting"></IconFont>
      </div>
    </div>

    <div class="deal-controller"></div>
  </div>
</template>

<style lang="less" scoped>
.TradeView {
  .chart-settings {
    position: absolute;
    left: 20px;
    top: 20px;
    display: flex;
    height: 45px;
    border: 1px solid #3a4357;
    border-radius: @border-radius-base;

    .cell {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      // text-align: center;
      border-left: 1px solid #3a4357;
      cursor: pointer;
      color: #3099f5;

      &:first-child {
        width: auto;
        border-left: none;
      }

      &:hover {
        background-color: #2b3345;
      }
    }

    ::v-deep(.ant-select-selector) {
      height: 43px;
      border: none;

      &:hover {
        background-color: #2b3345;
      }

      .ant-select-selection-item {
        line-height: 43px;
      }
    }
  }

  .deal-controller {
    position: absolute;
    left: 50%;
    bottom: 30px;
    z-index: 10;
    width: 525px;
    height: 80px;
    padding: 0 10px;
    margin-left: -262.5px;
    border-radius: 5px;
    background-color: rgba(28, 35, 51, 0.6);
    box-sizing: border-box;
    transition: width 0.2s, margin 0.2s;
  }
}
</style>
