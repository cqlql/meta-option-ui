<script lang="ts">
import DepositView from './comp/DepositView.vue'
import PaymentHistory from './comp/PaymentHistory.vue'
import WithdrawalView from './comp/WithdrawalView.vue'

export default {
  components: {
    DepositView,
    PaymentHistory,
    WithdrawalView,
  },
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'
import TabButtons from '@/components/TabButtons.vue'
import { useRoute } from 'vue-router'

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
]
const route = useRoute()

const tabVal = ref(
  (route.query.tab as string) ? (route.query.tab as string) : 'DepositView',
)
</script>
<template>
  <div class="mx-18 my-8">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
    <component :is="tabVal"></component>
  </div>
</template>
