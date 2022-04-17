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

const tabVal = ref('MyAccount')
</script>
<template>
  <div class="mx-23 my-10">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
    <MyAccount v-if="tabVal === 'MyAccount'"></MyAccount>
    <EditProfile v-else-if="tabVal === 'EditProfile'"></EditProfile>
    <ContactView v-else-if="tabVal === 'ContactView'"></ContactView>
  </div>
</template>

<style lang="scss" scoped></style>
