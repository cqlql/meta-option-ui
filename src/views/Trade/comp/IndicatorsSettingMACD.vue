<script lang="ts" setup>
import ColorSelect from './ColorSelect.vue'
import WidthSelect from './WidthSelect.vue'
import { InputNumber as AInputNumber } from 'ant-design-vue'
</script>
<template>
  <div class="IndicatorsSettingMACD">
    <div class="row full">
      <div v-for="v of 3" :key="v" class="cell">
        <div class="label"> Fast period </div>
        <div class="ipt">
          <a-input-number :min="1" :max="10" />
        </div>
      </div>
    </div>
    <div class="title">MACD</div>
    <div class="row">
      <div class="cell">
        <div class="label"> Color </div>
        <div class="ipt">
          <ColorSelect></ColorSelect>
        </div>
      </div>
      <div class="cell">
        <div class="label"> Width </div>
        <div class="ipt">
          <WidthSelect></WidthSelect>
        </div>
      </div>
    </div>
    <div class="title">Signal line</div>
    <div class="row">
      <div class="cell">
        <div class="label"> Color </div>
        <div class="ipt">
          <ColorSelect></ColorSelect>
        </div>
      </div>
      <div class="cell">
        <div class="label"> Width </div>
        <div class="ipt">
          <WidthSelect></WidthSelect>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <div class="label"> Color ↑ </div>
        <div class="ipt">
          <ColorSelect></ColorSelect>
        </div>
      </div>
      <div class="cell">
        <div class="label"> Color ↓ </div>
        <div class="ipt">
          <ColorSelect></ColorSelect>
        </div>
      </div>
    </div>

    <footer>
      <a-button type="info">Cancel</a-button>
      <a-button type="primary">Apply</a-button>
    </footer>
  </div>
</template>

<style lang="less" scoped>
.IndicatorsSettingMACD {
  padding: 15px 30px 0;

  .row {
    display: flex;
    margin-bottom: 15px;
    gap: 15px;

    &.full .cell {
      flex: 1;
    }

    .label {
      line-height: 18px;
      color: #7d8da1;
      font-size: 12px;
      margin-bottom: 2px;
    }
  }

  .title {
    line-height: 30px;
  }

  footer {
    display: flex;
  }

  .ant-select,
  .ant-input-number {
    display: block;
    min-width: 122px;
  }
}
</style>
