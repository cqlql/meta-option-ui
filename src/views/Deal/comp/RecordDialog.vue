<script lang="ts" setup>
import { Modal as AModal } from 'ant-design-vue'
import OpenAndClosePosition from '@/views/Finance/comp/OpenAndClosePosition.vue'
</script>
<template>
  <a-modal
    :footer="null"
    :class="$style.dialog"
    width="880px"
    centered
    v-bind="$attrs"
  >
    <OpenAndClosePosition></OpenAndClosePosition>
  </a-modal>
</template>

<style lang="less" module>
.dialog {
}
</style>
