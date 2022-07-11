<script lang="ts" setup>
import IconFont from '@/components/IconFont/IconFont.vue'
import { Switch as ASwitch } from 'ant-design-vue'
import { reactive } from 'vue'

defineProps<{
  modelValue: string
}>()

const list = reactive([
  {
    key: 'MACD',
    // name: 'MACD',
    icon: 'MACD',
    checked: false,
  },
  {
    key: 'MovingAverage',
    name: 'Moving Average',
    icon: 'line',
    checked: false,
  },
  {
    key: 'RSI',
    // name: 'RSI',
    icon: 'RSI',
    checked: false,
  },
])

function select(item: { checked: boolean }) {
  item.checked = !item.checked
}
</script>
<template>
  <div class="IndicatorsSelect">
    <div
      v-for="item of list"
      :key="item.key"
      class="item"
      @click="select(item)"
    >
      <div class="icon">
        <IconFont :name="item.icon"></IconFont>
      </div>
      <div class="name">{{ item.name || item.key }}</div>
      <div class="arrow" @click.stop>
        <a-switch v-model:checked="item.checked" />
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
      // font-size: 18px;
    }
  }
}
</style>
