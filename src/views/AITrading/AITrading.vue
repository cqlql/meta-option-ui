<script lang="ts">
import AIBrokerView from './AIBrokerView.vue'
import AIBrokerFlowerView from './AIBrokerFlowerView.vue'
import PortfolioView from './PortfolioView.vue'
import WalletHistoryView from './WalletHistoryView.vue'
import { TabVal } from './types'

export default {
  components: {
    AIBrokerFlowerView,
    AIBrokerView,
    PortfolioView,
    WalletHistoryView,
  },
}
</script>
<script lang="ts" setup>
import { provide, ref } from 'vue'
import TabButtons from '@/components/TabButtons.vue'

const list = [
  {
    label: 'AI Broker',
    value: 'AIBrokerView',
  },
  {
    label: 'Portfolio',
    value: 'PortfolioView',
  },
  {
    label: 'Wallet History',
    value: 'WalletHistoryView',
  },
  {
    label: 'AI Broker Flower',
    value: 'AIBrokerFlowerView',
  },
]

const tabVal = ref<TabVal>('AIBrokerView')

provide('tabVal', tabVal)
</script>
<template>
  <div class="mx-18 my-8 AITrading">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
    <component :is="tabVal"></component>
  </div>
</template>

<!-- <style lang="less" scoped>
.AITrading {
  font-family: OpenSans-Regular;
}
</style> -->
