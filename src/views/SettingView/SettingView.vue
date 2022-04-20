<script lang="ts" setup>
import { ref } from 'vue'
import TabButtons from '@/components/TabButtons.vue'
import MyAccount from './comp/MyAccount.vue'
import EditProfile from './comp/EditProfile.vue'
import ContactView from './comp/ContactView.vue'

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

const tabVal = ref('ContactView')
</script>
<template>
  <div class="mx-18 my-8">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
    <div class="mt-8">
      <MyAccount v-if="tabVal === 'MyAccount'"></MyAccount>
      <EditProfile v-else-if="tabVal === 'EditProfile'"></EditProfile>
      <ContactView v-else-if="tabVal === 'ContactView'"></ContactView>
    </div>
  </div>
</template>
