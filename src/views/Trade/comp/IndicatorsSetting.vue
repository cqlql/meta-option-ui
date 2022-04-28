<script lang="ts" setup>
import ColorSelect from './ColorSelect.vue'
import WidthSelect from './WidthSelect.vue'
import { InputNumber as AInputNumber } from 'ant-design-vue'

defineEmits<{
  (e: 'cancel'): void
}>()
</script>
<template>
  <div class="IndicatorsSettingMACD">
    <slot></slot>
    <footer>
      <a-button @click="$emit('cancel')" type="info">Cancel</a-button>
      <a-button type="primary">Apply</a-button>
    </footer>
  </div>
</template>

<style lang="less" scoped>
.IndicatorsSettingMACD {
  padding: 15px 30px 0;

  ::v-deep {
    .row {
      display: flex;
      margin-bottom: 15px;
      gap: 15px;

      &.full .cell {
        flex: 1;

        .ant-select,
        .ant-input-number {
          display: block;
          min-width: auto;
          width: auto;
        }
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

    .ant-select,
    .ant-input-number {
      display: block;
      min-width: 122px;
    }
  }
}
</style>
