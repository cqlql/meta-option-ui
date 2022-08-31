<script lang="ts" setup>
import { inject, Ref } from 'vue'
import Icon from '@/components/Icon/src/Icon.vue'

import StrategyList from './components/StrategyList.vue'
import TradingHistory from './components/TradingHistory.vue'
import LineStatistic from './components/LineStatistic.vue'
import DescriptionBox from './components/DescriptionBox.vue'
import IndicatorsBox from './components/IndicatorsBox.vue'
import ProfitabilityStatistic from './components/ProfitabilityStatistic.vue'
import { TabVal } from './types'

const tabVal = inject('tabVal') as Ref<TabVal>
</script>
<template>
  <div class="AIBrokerFlowerView mt-8">
    <div class="enter-y">
      <a @click="tabVal = 'AIBrokerView'">
        <Icon icon="ic:baseline-keyboard-arrow-left"></Icon> back
      </a>
    </div>
    <div class="max-w-1600px mt-3 mx-auto enter-y">
      <StrategyList class="mb-8"></StrategyList>
      <LineStatistic class="mb-8"></LineStatistic>
      <ProfitabilityStatistic class="mb-8"></ProfitabilityStatistic>
      <TradingHistory class="mb-8"></TradingHistory>

      <div class="flex gap-6">
        <div class="flex-1">
          <DescriptionBox></DescriptionBox>
          <a-button class="follow-btn" size="large" block type="primary"
            >Follow</a-button
          >
        </div>
        <div class="flex-1">
          <IndicatorsBox></IndicatorsBox>
        </div>
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

  // .TradingHistory,
  // .DescriptionBox,
  // .IndicatorsBox {
  //   margin-top: 34px;
  // }

  .follow-btn {
    margin-top: 60px;
  }
}
</style>
