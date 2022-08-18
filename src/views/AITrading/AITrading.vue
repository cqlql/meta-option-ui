<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import TabButtons from '@/components/TabButtons.vue'

const list = [
  {
    label: 'Deposit',
    value: 'DepositView',
  },
  {
    label: 'Payment history',
    value: 'PaymentHistory',
  },
  {
    label: 'Withdrawal',
    value: 'WithdrawalView',
  },
  {
    label: 'Withdrawal2',
    value: 'WithdrawalView2',
  },
]
const route = useRoute()

const tabVal = ref(
  (route.query.tab as string) ? (route.query.tab as string) : 'DepositView',
)
</script>
<template>
  <div class="mx-18 my-8">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
    <!-- <component :is="tabVal"></component> -->
  </div>
</template>

<style lang="scss" scoped></style>
