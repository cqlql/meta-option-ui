<script lang="ts" setup>
import MenuBtn from '@/components/MenuBtn.vue'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import HomeNav from './HomeNav.vue'
import UserInfoBar from './UserInfoBar.vue'
import SignOutDialog from '@/views/Login/SignOutDialog.vue'

function onScroll() {
  topFixed.value = scrollY > 70
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
const topFixed = ref(false)

const show = ref(false)

const signOutDialog = reactive({
  visible: false,
})
</script>
<template>
  <header class="HomeHeader" :class="{ topFixed }">
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
      <UserInfoBar @click="signOutDialog.visible = true"></UserInfoBar>
      <MenuBtn v-model:active="show" noStyle></MenuBtn>
    </div>
  </header>

  <HomeNav v-model:visible="show"></HomeNav>
  <SignOutDialog v-model:visible="signOutDialog.visible"></SignOutDialog>
</template>

<style lang="less" scoped>
.HomeHeader {
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 60px;
  background: transparent;
  transform: translateY(30px);
  transition: 0.4s;
  transition-property: background, transform;

  .logo {
    min-width: 269px;
  }

  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > * {
      margin-left: 20px;
    }

    // .ant-btn + .ant-btn,
    // .MenuBtn,
    // .UserInfoBar {
    //   margin-left: 20px;
    // }

    .MenuBtn {
      margin-right: 20px;
    }
  }

  &.topFixed {
    transform: translateY(0);
    background: #1a2030bf;
  }
}
</style>
