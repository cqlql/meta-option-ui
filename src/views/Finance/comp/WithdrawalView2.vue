<script lang="ts" setup>
import LayoutView from './LayoutView.vue'
import QuestionText from './QuestionText.vue'

import BankAccount from './BankAccount.vue'
</script>
<template>
  <LayoutView class="WithdrawalView">
    <template #left>
      <div class="left">
        <BankAccount></BankAccount>
      </div>
    </template>
    <template #right>
      <QuestionText class="enter-y"></QuestionText>
    </template>
  </LayoutView>
</template>

<style lang="less" scoped>
.WithdrawalView {
  .left {
    // .TitleItem:first-child {
    //   // margin-bottom: 60px;
    // }

    // .checkbox-plus > ::v-deep(.item:first-child) {
    //   margin-right: 15px;
    // }
  }

  & > ::v-deep(.left > .wrap) {
    // max-width: 450px;
  }

  & > ::v-deep(.right) {
    // flex: 1.2;
  }

  & > ::v-deep(.right > .wrap) {
    max-width: 510px;
  }
}
</style>
