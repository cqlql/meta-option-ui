<script lang="ts" setup>
import { Modal as AModal, Tabs as ATabs } from 'ant-design-vue'
import { ref } from 'vue'
import IndicatorsParams from './IndicatorsParams.vue'
import IndicatorsSelect from './IndicatorsSelect.vue'
import IndicatorsSettingMACD from './IndicatorsSettingMACD.vue'
import IndicatorsSettingRSI from './IndicatorsSettingRSI.vue'
import IndicatorsSettingMovingAverage from './IndicatorsSettingMovingAverage.vue'
const ATabPane = ATabs.TabPane
defineProps<{
  visible: boolean
}>()
const emit = defineEmits<{
  (e: 'update:visible', v: boolean): void
}>()

const indicatorType = ref('')
const activeKey = ref('1')
</script>
<template>
  <a-modal
    :visible="visible"
    title="Indicators"
    :class="$style.dialog"
    okText="Apply"
    :footer="null"
    @update:visible="(v:boolean) => emit('update:visible', v)"
  >
    <a-tabs v-model:activeKey="activeKey" animated>
      <a-tab-pane key="1" tab="New indicator">
        <Transition name="slide-right">
          <IndicatorsSelect
            v-show="!indicatorType"
            v-model="indicatorType"
          ></IndicatorsSelect>
        </Transition>
        <Transition name="slide-left">
          <IndicatorsSettingMACD
            v-show="indicatorType === 'MACD'"
            @cancel="indicatorType = ''"
          ></IndicatorsSettingMACD>
        </Transition>
        <Transition name="slide-left">
          <IndicatorsSettingMovingAverage
            v-show="indicatorType === 'MovingAverage'"
            @cancel="indicatorType = ''"
          ></IndicatorsSettingMovingAverage>
        </Transition>
        <Transition name="slide-left">
          <IndicatorsSettingRSI
            v-show="indicatorType === 'RSI'"
            @cancel="indicatorType = ''"
          ></IndicatorsSettingRSI>
        </Transition>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Current indicators">
        <IndicatorsParams></IndicatorsParams>
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<style lang="less" module>
.dialog {
  :global {
    .slide-left-enter-active,
    .slide-right-enter-active {
      transition: transform 0.3s ease;
    }

    .slide-left-leave-active,
    .slide-right-leave-active {
      display: none;
      // transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-left-enter-from {
      transform: translateX(100%);
      // opacity: 0;
    }

    .slide-right-enter-from {
      transform: translateX(-100%);
      // opacity: 0;
    }

    // =================================
    // ==============ant-modal==========
    // =================================

    .ant-btn {
      // height: 38px;
      // padding: 0 56px;
      // font-size: 15px;
      padding: 0 30px;
    }

    // .ant-btn:first-child {
    //   display: none;
    // }

    .ant-modal-body {
      padding: 0;
      background: #273042;
      padding-bottom: 15px;
    }

    .ant-modal-header {
      background: #273042;
    }

    .ant-modal-content {
      background: #273042;
    }

    .ant-modal-footer {
      // background: transparent;
    }

    // =================================
    // ==============ant-tabs==========
    // =================================

    .ant-tabs {
      color: #fff;
    }

    .ant-tabs-nav {
      background-color: #1f2739;
      height: 50px;
      line-height: 50px;
      margin: 0;
    }

    // .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    //   position: relative;
    //   display: inline-block;
    //   height: 50px;
    //   padding: 0 30px;
    //   cursor: pointer;
    // }

    .ant-tabs-tab {
      //  position: relative;
      // display: inline-block;
      height: 50px;
      padding: 0 30px;
      font-size: 15px;
      // cursor: pointer;
    }

    .ant-tabs-ink-bar {
      height: 3px !important;
      background-color: #3099f5;
    }

    .ant-tabs-tab + .ant-tabs-tab {
      margin: 0;
    }

    .ant-tabs-top > .ant-tabs-nav::before {
      display: none;
    }
  }
}
</style>
