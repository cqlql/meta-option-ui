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
      <div class="cell">
        <div class="label"> Fast period </div>
        <div class="ipt">
          <WidthSelect></WidthSelect>
        </div>
      </div>
      <div class="cell">
        <div class="label"> Fast period </div>
        <div class="ipt">
          <ColorSelect></ColorSelect>
        </div>
      </div>
      <div class="cell">
        <div class="label"> Fast period </div>
        <div class="ipt">
          <WidthSelect></WidthSelect>
        </div>
      </div>
    </div>
    <div class="title">Overbought</div>
    <div class="row full">
      <div class="cell">
        <div class="label"> Fast period </div>
        <div class="ipt">
          <WidthSelect></WidthSelect>
        </div>
      </div>
      <div class="cell">
        <div class="label"> Fast period </div>
        <div class="ipt">
          <ColorSelect></ColorSelect>
        </div>
      </div>
      <div class="cell">
        <div class="label"> Fast period </div>
        <div class="ipt">
          <WidthSelect></WidthSelect>
        </div>
      </div>
    </div>
    <div class="title">Oversold</div>
    <div class="row full">
      <div class="cell">
        <div class="label"> Fast period </div>
        <div class="ipt">
          <WidthSelect></WidthSelect>
        </div>
      </div>
      <div class="cell">
        <div class="label"> Fast period </div>
        <div class="ipt">
          <ColorSelect></ColorSelect>
        </div>
      </div>
      <div class="cell">
        <div class="label"> Fast period </div>
        <div class="ipt">
          <WidthSelect></WidthSelect>
        </div>
      </div>
    </div>
  </IndicatorsSetting>
</template>
