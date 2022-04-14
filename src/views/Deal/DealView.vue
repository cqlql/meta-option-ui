<script lang="ts" setup>
import { ref } from 'vue'
import TabButtons from '@/components/TabButtons.vue'

const list = [
  {
    label: 'Broker Center',
    value: 'BrokerCenter',
  },
  {
    label: 'Commision',
    value: 'Commision',
  },
]

const tabVal = ref('WithdrawalView')
</script>
<template>
  <div class="mx-23 my-8">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
  </div>
</template>

<!-- <style lang="less" scoped></style> -->
