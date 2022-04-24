<script lang="ts" setup>
import MenuBtn from '@/components/MenuBtn.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import HomeNav from './HomeNav.vue'

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
function test(event: Event) {
  topFixed.value = !topFixed.value
  console.log('test')
}

const show = ref(false)
</script>
<template>
  <header class="HomeHeader" :class="{ topFixed }">
    <div class="logo">
      <img src="@/assets/logo/logo-text-small.png" />
      <!-- <a-button @click="test">test</a-button> -->
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
      <MenuBtn v-model:active="show"></MenuBtn>
    </div>
  </header>

  <HomeNav :visible="show"></HomeNav>
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

  &.topFixed {
    transform: translateY(0);
    background: #1a2030bf;
  }
}
</style>
