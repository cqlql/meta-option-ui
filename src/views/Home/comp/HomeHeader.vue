<script lang="ts" setup>
import MenuBtn from '@/components/MenuBtn.vue'
import { onMounted, onUnmounted } from 'vue'

function onScroll(event: Event) {
  // console.log(event)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
<template>
  <header class="HomeHeader">
    <div class="logo">
      <img src="@/assets/logo/logo-text-small.png" />
    </div>
    <div class="right">
      <a-button
        @click="$router.push({ name: 'Login', query: { form: 'register' } })"
        ghost
        >Register</a-button
      >
      <a-button @click="$router.push({ name: 'Login' })" ghost
        >Sign In</a-button
      >
      <MenuBtn></MenuBtn>
    </div>
  </header>
</template>

<style lang="less" scoped>
.HomeHeader {
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 60px;
  transform: translateY(30px);

  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .ant-btn + .ant-btn,
    .MenuBtn {
      margin-left: 20px;
    }

    .MenuBtn {
      margin-right: 20px;
    }
  }
}
</style>
