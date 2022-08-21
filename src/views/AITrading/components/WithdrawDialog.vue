<script lang="ts" setup>
import { Modal as AModal } from 'ant-design-vue'
import Logo from '@/components/Logo.vue'
import LabelValueLine from '@/components/LabelValueLine.vue'

function handleOk() {
  emit('update:visible', false)
}

defineProps<{
  visible: boolean
}>()
const emit = defineEmits<{
  (e: 'update:visible', v: boolean): void
}>()
</script>
<template>
  <a-modal
    :visible="visible"
    @ok="handleOk"
    width="440px"
    @update:visible="(v) => $emit('update:visible', v)"
  >
    <template #title>
      <Logo></Logo>
    </template>
    <LabelValueLine label="Available Balance">
      <span class="green-color">$20,367</span>
    </LabelValueLine>

    <LabelValueLine label="Trading">
      <span class="red-color">$20,367</span>
    </LabelValueLine>
    <template #footer>
      <div class="submit-btn" @click="handleOk">
        <a-button size="large" block type="primary"
          >Withdraw Available Balance</a-button
        >
      </div>
    </template>
  </a-modal>
</template>

<style lang="less" scoped>
.LogoV {
  position: relative;
  top: 14px;
}

.LabelValueLine:last-child {
  padding-top: 26px;
}

.submit-btn {
  padding: 0 8px 28px;

  // .ant-btn {
  // height: 46px;
  // font-size: 16px;
  // }
}
</style>
