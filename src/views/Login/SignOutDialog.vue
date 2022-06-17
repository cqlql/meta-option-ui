<script lang="ts" setup>
import { Modal as AModal } from 'ant-design-vue'

defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'update:visible', v: boolean): void
}>()

function handleOk() {
  close()
}
function close() {
  emit('update:visible', false)
}
</script>
<template>
  <a-modal
    :visible="visible"
    title="Exit"
    @ok="handleOk"
    @cancel="close"
    @update:visible="(v:boolean) => $emit('update:visible', v)"
  >
    Do you really want to exit?
  </a-modal>
</template>
