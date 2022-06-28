<script lang="ts" setup>
import { Modal as AModal } from 'ant-design-vue'
import BankAccount from './BankAccount.vue'
// defineProps<{
//   visible: boolean
// }>()
// const emit = defineEmits<{
//   (e: 'update:visible', v: boolean): void
// }>()
</script>
<template>
  <a-modal
    title="BankCard"
    :footer="null"
    :class="$style.dialog"
    width="450px"
    v-bind="$attrs"
  >
    <BankAccount noTitle></BankAccount>
  </a-modal>
</template>

<style lang="less" module>
.dialog {
  :global {
    .CardBox {
      box-shadow: none;
      padding: 0;
    }

    .ant-form {
      padding: 0 !important;
    }
  }
}
</style>
