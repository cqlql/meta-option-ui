<script lang="ts" setup>
import HomeNav from '@/page/Home/comp/HomeNav.vue'
import Icon from '../Icon/src/Icon.vue'
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
      <HomeNav @select="close"></HomeNav>
    </div>
    <div class="bottom">
      <a target="_blank" href="https://t.me/PlayTime_DAO"
        ><Icon icon="mdi:telegram"></Icon
      ></a>

      <a target="_blank" href="https://twitter.com/PlayTimeDao"
        ><Icon icon="mdi:twitter"></Icon
      ></a>
      <a target="_blank" href="https://brickey2133.gitbook.io/playtimedao"
        ><Icon icon="simple-icons:gitbook"></Icon
      ></a>
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
  font-size: 20px;
  background-image: linear-gradient(0deg, #177dcf 0%, #50abf6 100%);

  line-height: 28px;
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

  .bottom {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    padding: 0px 20px 10px;
    // color: #fff;
    font-size: 34px;
    border-top: 1px solid #fff;
    a {
      color: #fff;
    }
  }
}
</style>
