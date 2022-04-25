<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
// import { useRoute } from 'vue-router'
// const open = ref(false)
defineProps<{
  visible: boolean
}>()

const list = [
  {
    title: 'Trade',
    name: 'Trade',
  },
  {
    title: 'Finance',
    name: 'Finance',
  },
  {
    title: 'Deal',
    name: 'Deal',
  },
  {
    title: 'About Us',
    name: 'AboutUs',
  },
  {
    title: 'News',
    name: 'News',
  },
  {
    title: 'Setting',
    name: 'Setting',
  },
]
const emit = defineEmits<{
  (e: 'update:visible', v: boolean): void
}>()

// const route = useRoute()

// const routeName = computed(() => {
//   return route.name
// })

function close() {
  emit('update:visible', false)
}
</script>
<template>
  <transition name="fade">
    <div v-show="visible" class="NavList_bg" @click="close"></div>
  </transition>

  <div class="NavList" :class="{ show_list: visible }">
    <img class="logo" src="@/assets/logo/logo.png" />
    <div class="nav_header">
      <a @click="close"><Icon icon="ic:baseline-close"></Icon></a>
    </div>
    <div class="wrap">
      <ul>
        <li v-for="item of list" :key="item.name">
          <router-link
            class="font-medium transition hover:opacity-80 focus:outline-none focus-visible:underline"
            :to="{ name: item.name }"
            >{{ item.title }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
@top: 64px;

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
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  transition: all 0.3;
}

.NavList {
  // display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  // left: (380px/2);
  width: 380px;
  height: 100vh;
  line-height: 28px;
  font-size: 20px;
  // background-image: linear-gradient(0deg, #177dcf 0%, #50abf6 100%);
  background: #171e2d;
  transform: translateX(100%);
  transition: transform 0.5s;

  &.show_list {
    transform: translate(0);
  }

  .nav_header {
    padding: 10px 20px;
    text-align: right;

    a {
      display: inline-block;
      width: 38px;
      height: 38px;
      color: #fff;
      font-size: 38px;

      &:hover {
        background-color: hsla(0, 0%, 100%, 0.05);
      }
    }
  }

  .wrap {
    // margin-top: 82px;
    position: absolute;
    top: 53px;
    right: 0;
    bottom: 0;
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

  .logo {
    position: absolute;
    top: 580px;
    right: -38px;
    opacity: 0.3;
    filter: grayscale(100%);
  }
}
</style>
