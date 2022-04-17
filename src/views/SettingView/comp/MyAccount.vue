<script lang="ts" setup>
import TitleItem from '@/views/Finance/comp/TitleItem.vue'
import AccountBalance from './AccountBalance.vue'
import BalanceList from './BalanceList.vue'
</script>
<template>
  <div>
    <div class="MyAccount flex mt-5 enter-y">
      <div class="flex-1">
        <TitleItem title="Account Balance">
          <AccountBalance />
        </TitleItem>
      </div>
      <div class="flex-[1.2]">
        <TitleItem title="Verification"> </TitleItem>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.MyAccount {
}
</style>
