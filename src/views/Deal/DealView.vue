<script lang="ts" setup>
import { ref } from 'vue'
import TabButtons from '@/components/TabButtons.vue'

const list = [
  {
    label: 'Broker Center',
    value: 'BrokerCenter',
  },
  {
    label: 'Commission',
    value: 'Commission',
  },
]

const tabVal = ref('WithdrawalView')
</script>
<template>
  <div class="mx-23 my-10">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
  </div>
</template>

<!-- <style lang="less" scoped></style> -->
