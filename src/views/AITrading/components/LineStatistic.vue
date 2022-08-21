<script lang="ts" setup>
import { Select as ASelect } from 'ant-design-vue'

const ASelectOption = ASelect.Option
</script>
<template>
  <div class="LineStatistic">
    <div class="LineStatistic-header">
      <div class="l">
        <a-select ref="select" value="Profit">
          <a-select-option value="Profit">Profit</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled" disabled>Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
      </div>
      <div class="r">
        <a-button size="small">24d</a-button>
        <a-button size="small">7d</a-button>
        <a-button size="small">30d</a-button>
        <a-button size="small">All</a-button>
      </div>
    </div>
    <div class="LineStatistic-content"> line chart </div>
  </div>
</template>

<style lang="scss" scoped>
.LineStatistic {
  background-color: #171e2d;
  border-radius: 4px;
  padding: 10px;
}

.LineStatistic-header {
  display: flex;
  .l {
    flex: 1;
  }
  .r {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .ant-btn.active {
    color: #55a8e8;
    border-color: #55a8e8;
    background: transparent;
  }
}
.LineStatistic-content {
}
</style>
