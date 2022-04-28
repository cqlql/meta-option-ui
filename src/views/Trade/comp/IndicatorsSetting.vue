<script lang="ts" setup>
defineEmits<{
  (e: 'cancel'): void
}>()
</script>
<template>
  <div :class="$style.MACD">
    <slot></slot>
    <footer>
      <a-button @click="$emit('cancel')" type="info">Cancel</a-button>
      <a-button type="primary">Apply</a-button>
    </footer>
  </div>
</template>

<style lang="less" module>
.MACD {
  padding: 15px 30px 0;

  :global {
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
