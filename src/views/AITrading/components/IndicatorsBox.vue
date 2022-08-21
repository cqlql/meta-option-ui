<script lang="ts" setup>
import CardBox from './CardBox.vue'
</script>
<template>
  <CardBox class="IndicatorsBox" title="Indicators">
    <div class="list">
      <div class="item">
        <div class="l">Profitability (7 days)</div>
        <div class="r red-color"> -6.93% </div>
      </div>
      <div class="item">
        <div class="l">Profitability (7 days)</div>
        <div class="r red-color"> -6.93% </div>
      </div>
      <div class="item">
        <div class="l">Profitability (7 days)</div>
        <div class="r red-color"> -6.93% </div>
      </div>
      <div class="item">
        <div class="l">Profitability (7 days)</div>
        <div class="r red-color"> -6.93% </div>
      </div>
      <div class="item">
        <div class="l">Profitability (7 days)</div>
        <div class="r"> -6.93% </div>
      </div>
      <div class="item">
        <div class="l">Profitability (7 days)</div>
        <div class="r"> -6.93% </div>
      </div>
      <div class="item">
        <div class="l">Profitability (7 days)</div>
        <div class="r"> -6.93% </div>
      </div>
      <div class="item">
        <div class="l">Profitability (7 days)</div>
        <div class="r"> -6.93% </div>
      </div>
    </div>
  </CardBox>
</template>

<style lang="less" scoped>
.IndicatorsBox {
  .list {
    margin-top: -6px;
  }

  .item {
    display: flex;
    align-items: center;
    height: 50px;
    border-top: 1px solid #424b60;
    color: #fff;

    &:first-child {
      border: none;
    }
  }

  .l {
    flex: 1;
  }
}
</style>
