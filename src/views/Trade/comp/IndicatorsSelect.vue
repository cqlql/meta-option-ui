<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
import IconFont from '@/components/IconFont/IconFont.vue'

const list = [
  {
    name: 'MACD',
    icon: 'MACD',
  },
  {
    name: 'Moving Average',
    icon: 'line',
  },
  {
    name: 'RSI',
    icon: 'RSI',
  },
]
</script>
<template>
  <div class="IndicatorsSelect">
    <div v-for="item of list" :key="item.name" class="item">
      <div class="icon">
        <IconFont :name="item.icon"></IconFont>
      </div>
      <div class="name">{{ item.name }}</div>
      <div class="arrow">
        <Icon icon="ic:baseline-arrow-forward-ios"></Icon>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.IndicatorsSelect {
  .item {
    display: flex;
    align-items: center;
    height: 40px;
    // line-height: 38px;
    padding: 0 30px;
    // padding: 0 30px 0 60px;
    border-bottom: 1px solid #2d384a;

    &:hover {
      background-color: hsla(0, 0%, 100%, 0.03);
    }

    .icon {
      line-height: 1;
      color: #7d8da1;
      margin-right: 10px;
    }

    .name {
      flex: 1;
    }

    .arrow {
      font-size: 18px;
    }
  }
}
</style>
