<script lang="ts" setup>
import { Modal as AModal } from 'ant-design-vue'
const props = defineProps<{
  visible: boolean
}>()
const emit = defineEmits<{
  (e: 'update:visible', v: boolean): void
}>()

function handleOk() {}
</script>
<template>
  <div>
    <a-modal
      :visible="visible"
      @update:visible="(v:boolean) => emit('update:visible', v)"
      title="Chart type"
      @ok="handleOk"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<style lang="scss" scoped></style>
