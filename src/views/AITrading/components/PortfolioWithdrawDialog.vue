<script lang="ts" setup>
import { Modal as AModal } from 'ant-design-vue'

import LabelValueLine from '@/components/LabelValueLine.vue'
import TitleBox from '@/components/TitleBox.vue'

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
    centered
    @update:visible="(v) => $emit('update:visible', v)"
  >
    <template #title>
      <div class="PortfolioWithdrawDialog-title">
        AI Broker : Pa Swing Trading
      </div>
    </template>
    <div class="PortfolioWithdrawDialog-body">
      <div class="explain">Please input invest amount</div>

      <LabelValueLine label="Balance">
        <span class="green-color">$20,367</span>
      </LabelValueLine>
      <TitleBox title="Amount">
        <a-input size="large" placeholder="Min : $200"></a-input>
      </TitleBox>
      <div class="explain-s"> Service Fee : $1 </div>
      <LabelValueLine label="Total"> $20,367 </LabelValueLine>
    </div>
    <template #footer>
      <div class="submit-btn" @click="handleOk">
        <a-button size="large" block type="primary">Confirm</a-button>
      </div>
    </template>
  </a-modal>
</template>

<style lang="less" scoped>
.PortfolioWithdrawDialog-title {
  position: relative;
  top: 16px;
  text-align: center;
}

.PortfolioWithdrawDialog-body {
  .explain {
    color: #898e9e;
    font-size: 18px;
  }

  .explain-s {
    color: #898e9e;
    padding-left: 22px;
  }

  .ant-input {
    border-radius: 10px;
    background-color: #171e2d;
  }

  ::v-deep(.TitleBox) {
    padding: 0;
    border: none;
    margin-top: 24px;

    .TitleBox_title {
      left: 28px;
      z-index: 1;
      padding: 0 5px;
      background-color: #171e2d;
    }
  }
}

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
