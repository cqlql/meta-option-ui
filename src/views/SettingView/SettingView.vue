<script lang="ts" setup>
import { provide, ref } from 'vue'
import TabButtons from '@/components/TabButtons.vue'
import MyAccount from './comp/MyAccount.vue'
import EditProfile from './comp/EditProfile.vue'
import ContactView from './comp/ContactView.vue'
import BankCard from './comp/BankCard.vue'
import { TabVal } from './types'
import GoogleAuth from './comp/GoogleAuth.vue'

const list = [
  {
    label: 'My Account',
    value: 'MyAccount',
  },
  {
    label: 'Edit Profile',
    value: 'EditProfile',
  },
  {
    label: 'Contact',
    value: 'ContactView',
  },
]

const tabVal = ref<TabVal>('MyAccount')

provide('tabVal', tabVal)
</script>
<template>
  <div class="mx-18 my-8">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
    <div class="mt-8">
      <MyAccount v-if="tabVal === 'MyAccount'"></MyAccount>
      <EditProfile v-else-if="tabVal === 'EditProfile'"></EditProfile>
      <ContactView v-else-if="tabVal === 'ContactView'"></ContactView>
      <BankCard
        @back="tabVal = 'MyAccount'"
        v-else-if="tabVal === 'BankCard'"
      ></BankCard>
      <GoogleAuth
        @back="tabVal = 'MyAccount'"
        v-else-if="tabVal === 'GoogleAuth'"
      ></GoogleAuth>
    </div>
  </div>
</template>
