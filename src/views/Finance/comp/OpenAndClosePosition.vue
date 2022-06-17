<script lang="ts" setup>
import { ref } from 'vue'
import OpenPosition from './OpenPosition.vue'
import ClosePosition from './ClosePosition.vue'

const radioVal = ref('a')
</script>
<template>
  <div class="OpenAndClosePosition">
    <div class="tabBtn">
      <a-radio-group v-model:value="radioVal">
        <a-radio-button class="!px-10 !h-12 !leading-12" value="a"
          >Open Position</a-radio-button
        >
        <a-radio-button class="!px-10 !h-12 !leading-12" value="b"
          >Close Position</a-radio-button
        >
      </a-radio-group>
    </div>

    <div class="table">
      <OpenPosition v-if="radioVal === 'a'"></OpenPosition>
      <ClosePosition v-else></ClosePosition>
    </div>
  </div>
</template>

<style lang="less" scoped>
.OpenAndClosePosition {
  // padding: 23px;
  // margin: 44px 0 0;
  // background-color: #171e2d;
  // box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
  // border-radius: @border-radius-base;

  .ant-radio-group {
    // margin: 15px auto 0;
  }

  .tabBtn {
    margin: 15px 0 10px;
    text-align: center;
  }

  .table {
    width: 100%;
  }
}
</style>
