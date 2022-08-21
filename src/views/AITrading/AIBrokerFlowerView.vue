<script lang="ts" setup>
import { ref } from 'vue'
import Icon from '@/components/Icon/src/Icon.vue'

import StrategyList from './components/StrategyList.vue'
import TradingHistory from './components/TradingHistory.vue'
import LineStatistic from './components/LineStatistic.vue'
import DescriptionBox from './components/DescriptionBox.vue'
import IndicatorsBox from './components/IndicatorsBox.vue'
import ProfitabilityStatistic from './components/ProfitabilityStatistic.vue'

const tabVal = ref('')
</script>
<template>
  <div class="AIBrokerFlowerView mt-8">
    <div class="enter-y">
      <a @click="tabVal = 'MyAccount'">
        <Icon icon="ic:baseline-keyboard-arrow-left"></Icon> back
      </a>
    </div>
    <div class="max-w-1200px mt-3 mx-auto enter-y flex gap-4">
      <div class="flex-1">
        <StrategyList></StrategyList>
        <TradingHistory></TradingHistory>
      </div>
      <div class="flex-1">
        <LineStatistic></LineStatistic>
        <DescriptionBox></DescriptionBox>
        <a-button class="follow-btn" size="large" block type="primary"
          >Follow</a-button
        >
      </div>
      <div class="flex-1">
        <ProfitabilityStatistic></ProfitabilityStatistic>
        <IndicatorsBox></IndicatorsBox>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.AIBrokerFlowerView {
  .cont {
    // column-count: 3;
    // column-gap: 10px;
  }

  .TradingHistory,
  .DescriptionBox,
  .IndicatorsBox {
    margin-top: 34px;
  }

  .follow-btn {
    margin-top: 60px;
  }
}
</style>
