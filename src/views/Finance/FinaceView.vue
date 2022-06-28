<script lang="ts">
import DepositView from './comp/DepositView.vue'
import PaymentHistory from './comp/PaymentHistory.vue'
import WithdrawalView from './comp/WithdrawalView.vue'
import WithdrawalView2 from './comp/WithdrawalView2.vue'

export default {
  components: {
    DepositView,
    PaymentHistory,
    WithdrawalView,
    WithdrawalView2,
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
    <component :is="tabVal"></component>
  </div>
</template>
