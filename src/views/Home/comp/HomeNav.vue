<script lang="ts" setup>
import { ref } from 'vue'
// const open = ref(false)
defineProps<{
  visible: boolean
}>()
const emit = defineEmits<{
  (e: 'update:visible', v: boolean): void
}>()

function close() {
  emit('update:visible', false)
}
</script>
<template>
  <transition name="fade">
    <div v-show="visible" class="NavList_bg" @click="close"></div>
  </transition>

  <div class="NavList" :class="{ show_list: visible }">
    <div class="wrap">
      <ul>
        <li>
          <router-link
            class="font-medium transition hover:opacity-80 focus:outline-none focus-visible:underline"
            to="/"
            @click="$emit('select')"
            >xxx</router-link
          >
        </li>
        <li>
          <router-link
            class="font-medium transition hover:opacity-80 focus:outline-none focus-visible:underline"
            to="/exchange"
            @click="$emit('select')"
            >xxxxz</router-link
          >
        </li>
        <li>
          <router-link
            class="font-medium transition hover:opacity-80 focus:outline-none focus-visible:underline"
            to="/destroy"
            @click="$emit('select')"
            >xxxxz</router-link
          >
        </li>
        <li>
          <router-link
            class="font-medium transition hover:opacity-80 focus:outline-none focus-visible:underline"
            to="/trade"
            @click="$emit('select')"
            >xxxxz</router-link
          >
        </li>

        <li>
          <router-link
            class="font-medium transition hover:opacity-80 focus:outline-none focus-visible:underline"
            to="/addLp"
            @click="$emit('select')"
            >xxxxz</router-link
          >
        </li>
        <li>
          <router-link
            class="font-medium transition hover:opacity-80 focus:outline-none focus-visible:underline"
            to="/game"
            @click="$emit('select')"
            >xxxxz</router-link
          >
        </li>
        <li>
          <router-link
            class="font-medium transition hover:opacity-80 focus:outline-none focus-visible:underline"
            to="/walletGm"
            @click="$emit('select')"
            >xxxxz</router-link
          >
        </li>

        <li>
          <router-link
            class="font-medium transition hover:opacity-80 focus:outline-none focus-visible:underline"
            to="/myFriend"
            @click="$emit('select')"
            >xxxxz</router-link
          >
        </li>

        <li>
          <router-link
            class="font-medium transition hover:opacity-80 focus:outline-none focus-visible:underline"
            to="/notice"
            @click="$emit('select')"
            >xxxxz</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.NavList_bg {
  position: fixed;
  left: 0;
  top: 53px;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  transition: all 0.3;
}

.NavList {
  // display: none;
  position: fixed;
  left: (380px/2);
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  height: 100vh;
  line-height: 28px;
  font-size: 20px;
  background-image: linear-gradient(0deg, #177dcf 0%, #50abf6 100%);
  transform: translateY(-100%);
  transition: transform 0.5s;

  &.show_list {
    transform: translate(0);
  }

  .wrap {
    // margin-top: 82px;
    position: absolute;
    top: 53px;
    right: 0;
    bottom: 60px;
    width: 100%;
    overflow: auto;
  }

  ul {
    width: 100%;
    // text-align: center;
  }

  &::v-deep(li) {
    margin: 32px 0;
    padding-left: 20px;

    a {
      color: #fff;
    }
  }
}
</style>
