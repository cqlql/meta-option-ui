<script lang="ts" setup>
import { ref } from 'vue'
import TabButtons from '@/components/TabButtons.vue'
import BrokerCenter from './comp/BrokerCenter.vue'
import CommissionView from './comp/CommissionView.vue'

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

const tabVal = ref('Commission')
</script>
<template>
  <div class="mx-23 my-10">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
    <BrokerCenter v-if="tabVal === 'BrokerCenter'"></BrokerCenter>
    <CommissionView v-else-if="tabVal === 'Commission'"></CommissionView>
  </div>
</template>

<!-- <style lang="less" scoped></style> -->
