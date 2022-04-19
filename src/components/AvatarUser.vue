<script lang="ts" setup>
import AvatarVue from './AvatarVue.vue'
defineProps<{
  src: string
}>()
</script>
<template>
  <div class="AvatarUser">
    <AvatarVue :src="src"></AvatarVue>
    <div class="text-2xl text-center my-3"><slot></slot></div>
  </div>
</template>

<style lang="less" scoped>
.AvatarUser {
  & > .avatar {
    margin: 0 auto;
  }
}
</style>
