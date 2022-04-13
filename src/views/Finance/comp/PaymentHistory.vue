<script lang="ts" setup>
import { ref } from 'vue'
import OpenPosition from './OpenPosition.vue'
import ClosePosition from './ClosePosition.vue'

const radioVal = ref('a')
</script>
<template>
  <!-- 多的根元素是为了不延迟 enter-y -->
  <div>
    <div class="PaymentHistory enter-y">
      <div class="tabBtn">
        <a-radio-group v-model:value="radioVal">
          <a-radio-button value="a">Open Position</a-radio-button>
          <a-radio-button value="b">Close Position</a-radio-button>
        </a-radio-group>
      </div>

      <div class="table">
        <OpenPosition v-if="radioVal === 'a'"></OpenPosition>
        <ClosePosition v-else></ClosePosition>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.PaymentHistory {
  padding: 30px;
  margin: 58px 0 0;
  background-color: #171e2d;
  box-shadow: 0 10px 58px 0 rgba(0, 0, 0, 0.24);
  border-radius: 6px;

  .ant-radio-group {
    // margin: 20px auto 0;
  }

  .tabBtn {
    margin: 20px 0 0;
    text-align: center;
  }

  .table {
    width: 100%;
  }
}
</style>
