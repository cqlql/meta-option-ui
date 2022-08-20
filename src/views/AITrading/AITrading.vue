<script lang="ts">
import AIBrokerView from './AIBrokerView/AIBrokerView.vue'
import AIBrokerFlowerView from './AIBrokerFlowerView.vue'
import PortfolioView from './PortfolioView/PortfolioView.vue'

export default {
  components: {
    AIBrokerFlowerView,
    AIBrokerView,
    PortfolioView,
  },
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import TabButtons from '@/components/TabButtons.vue'

const list = [
  {
    label: 'AI broker',
    value: 'AIBrokerView',
  },
  {
    label: 'AI broker2',
    value: 'AIBrokerFlowerView',
  },
  {
    label: 'Portfolio',
    value: 'PortfolioView',
  },
]
const route = useRoute()

const tabVal = ref(
  (route.query.tab as string)
    ? (route.query.tab as string)
    : 'AIBrokerFlowerView',
)
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
