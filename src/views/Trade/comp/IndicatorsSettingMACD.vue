<script lang="ts" setup>
import ColorSelect from './ColorSelect.vue'
import WidthSelect from './WidthSelect.vue'
import { InputNumber as AInputNumber } from 'ant-design-vue'
import IndicatorsSetting from './IndicatorsSetting.vue'

// defineEmits<{
//   (e: 'cancel'): void
// }>()
</script>
<template>
  <IndicatorsSetting v-bind="$attrs">
    <div class="row full">
      <div v-for="v of 3" :key="v" class="cell">
        <div class="label"> Fast period </div>
        <div class="ipt">
          <a-input-number :min="1" :max="10" />
        </div>
      </div>
    </div>
    <div class="title">MACD</div>
    <div class="row">
      <div class="cell">
        <div class="label"> Color </div>
        <div class="ipt">
          <ColorSelect></ColorSelect>
        </div>
      </div>
      <div class="cell">
        <div class="label"> Width </div>
        <div class="ipt">
          <WidthSelect></WidthSelect>
        </div>
      </div>
    </div>
    <div class="title">Signal line</div>
    <div class="row">
      <div class="cell">
        <div class="label"> Color </div>
        <div class="ipt">
          <ColorSelect></ColorSelect>
        </div>
      </div>
      <div class="cell">
        <div class="label"> Width </div>
        <div class="ipt">
          <WidthSelect></WidthSelect>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <div class="label"> Color ↑ </div>
        <div class="ipt">
          <ColorSelect></ColorSelect>
        </div>
      </div>
      <div class="cell">
        <div class="label"> Color ↓ </div>
        <div class="ipt">
          <ColorSelect></ColorSelect>
        </div>
      </div>
    </div>
  </IndicatorsSetting>
</template>
