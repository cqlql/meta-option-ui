<script lang="ts" setup>
import { ref } from 'vue'
import Icon from '@/components/Icon/src/Icon.vue'

import StrategyList from './components/StrategyList.vue'
import TradingHistory from './components/TradingHistory.vue'
import LineStatistic from './components/LineStatistic.vue'
import DescriptionBox from './components/DescriptionBox.vue'

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
      </div>
      <div class="flex-1">3</div>
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
  .DescriptionBox {
    margin-top: 34px;
  }
}
</style>
