<script lang="ts">
import AIBrokerView from './AIBrokerView.vue'
import AIBrokerFlowerView from './AIBrokerFlowerView.vue'
import PortfolioView from './PortfolioView.vue'
import { TabVal } from './types'

export default {
  components: {
    AIBrokerFlowerView,
    AIBrokerView,
    PortfolioView,
  },
}
</script>
<script lang="ts" setup>
import { provide, ref } from 'vue'
import TabButtons from '@/components/TabButtons.vue'

const list = [
  {
    label: 'AI broker',
    value: 'AIBrokerView',
  },
  {
    label: 'Portfolio',
    value: 'PortfolioView',
  },
]

// const tabVal = ref<TabVal>('AIBrokerView')
const tabVal = ref<TabVal>('AIBrokerFlowerView')

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
