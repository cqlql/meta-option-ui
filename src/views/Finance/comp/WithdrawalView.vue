<script lang="ts" setup>
import TitleItem from './TitleItem.vue'
import LayoutView from './LayoutView.vue'
import QuestionText from './QuestionText.vue'

import EnterAmout from './EnterAmout.vue'
import CheckboxPayment from './CheckboxPayment.vue'
import { ref } from 'vue'
import BankAccount from './BankAccount.vue'
import USDTAccount from './USDTAccount.vue'

const paymentType = ref<'' | 'bank' | 'USDT'>('')
</script>
<template>
  <LayoutView class="WithdrawalView">
    <template #left>
      <div class="left">
        <TitleItem title="Enter amount">
          <EnterAmout></EnterAmout>
        </TitleItem>
        <TitleItem class="mt-8" title="Choose payment system">
          <CheckboxPayment v-model="paymentType"></CheckboxPayment>
        </TitleItem>
      </div>
    </template>
    <template #right>
      <BankAccount v-if="paymentType === 'bank'" class="enter-y"></BankAccount>
      <USDTAccount
        v-else-if="paymentType === 'USDT'"
        class="enter-y"
      ></USDTAccount>
      <QuestionText v-else class="enter-y"></QuestionText>
    </template>
  </LayoutView>
</template>

<style lang="less" scoped>
.WithdrawalView {
  .left {
    .TitleItem:first-child {
      // margin-bottom: 80px;
    }

    .checkbox-plus > ::v-deep(.item:first-child) {
      margin-right: 20px;
    }
  }

  & > ::v-deep(.left > .wrap) {
    max-width: 600px;
  }

  & > ::v-deep(.right) {
    // flex: 1.2;
  }

  & > ::v-deep(.right > .wrap) {
    max-width: 680px;
  }
}
</style>
