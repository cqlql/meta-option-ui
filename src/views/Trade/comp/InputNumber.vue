<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
</script>
<template>
  <div class="InputNumber">
    <div class="action left">
      <Icon icon="ic:baseline-minus"></Icon>
    </div>
    <div class="middle">
      <input type="text" />
    </div>
    <div class="action right">
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

    input {
      background: transparent;
      border-radius: 0;
    }
  }
}
</style>
