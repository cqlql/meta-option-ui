<script lang="ts" setup>
import OpenAndClosePosition from './OpenAndClosePosition.vue'
</script>
<template>
  <!-- 多的根元素是为了不延迟 enter-y -->
  <div>
    <OpenAndClosePosition class="PaymentHistory enter-y"></OpenAndClosePosition>
  </div>
</template>

<style lang="less" scoped>
.PaymentHistory {
  padding: 23px;
  margin: 44px 0 0;
  background-color: #171e2d;
  box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
  border-radius: @border-radius-base;
}
</style>
