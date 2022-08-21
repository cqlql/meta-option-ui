<script lang="ts" setup></script>
<template>
  <div class="ProfitabilityStatistic">
    <div class="ProfitabilityStatistic-header">
      <div class="l"> Profitability </div>
      <div class="r">
        <a-button>By days</a-button>
        <a-button class="active">By month</a-button>
      </div>
    </div>
    <div class="ProfitabilityStatistic-content"> line chart </div>
  </div>
</template>

<style lang="scss" scoped>
.ProfitabilityStatistic {
  background-color: #171e2d;
  border-radius: 4px;
  padding: 10px;
}

.ProfitabilityStatistic-header {
  display: flex;
  .l {
    flex: 1;
    color: #898e9e;
  }
  .r {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .ant-btn.active {
    color: #55a8e8;
    border-color: #55a8e8;
    background: transparent;
  }
}
.ProfitabilityStatistic-content {
}
</style>
