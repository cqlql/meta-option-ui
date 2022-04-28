<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
import IconFont from '@/components/IconFont/IconFont.vue'

defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()
const list = [
  {
    key: 'MACD',
    // name: 'MACD',
    icon: 'MACD',
  },
  {
    key: 'MovingAverage',
    name: 'Moving Average',
    icon: 'line',
  },
  {
    key: 'RSI',
    // name: 'RSI',
    icon: 'RSI',
  },
]

function select(key: string) {
  emit('update:modelValue', key)
}
</script>
<template>
  <div class="IndicatorsSelect">
    <div
      v-for="item of list"
      :key="item.key"
      class="item"
      @click="select(item.key)"
    >
      <div class="icon">
        <IconFont :name="item.icon"></IconFont>
      </div>
      <div class="name">{{ item.name || item.key }}</div>
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
