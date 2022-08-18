<script lang="ts">
import AIBrokerView from './AIBrokerView/AIBrokerView.vue'
import PortfolioView from './PortfolioView/PortfolioView.vue'

export default {
  components: {
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
    label: 'Portfolio',
    value: 'PortfolioView',
  },
]
const route = useRoute()

const tabVal = ref(
  (route.query.tab as string) ? (route.query.tab as string) : 'AIBrokerView',
)
</script>
<template>
  <div class="mx-18 my-8">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
    <component :is="tabVal"></component>
  </div>
</template>

<style lang="scss" scoped></style>
