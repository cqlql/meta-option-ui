<script lang="ts" setup>
import { ref } from 'vue'
import TabButtons from '@/components/TabButtons.vue'

import OpenPosition from './comp/OpenPosition.vue'
import ClosePosition from './comp/ClosePosition.vue'

const list = [
  {
    label: 'Deposit',
    value: 'Deposit',
  },
  {
    label: 'Payment history',
    value: 'Payment history',
  },
  {
    label: 'Withdrawal',
    value: 'Withdrawal',
  },
]

const tabVal = ref('Deposit')
const radioVal = ref('a')
</script>
<template>
  <div class="FinaceView">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
    <div class="content enter-y">
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
.FinaceView {
  padding: 28px 80px;

  .content {
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
}
</style>
