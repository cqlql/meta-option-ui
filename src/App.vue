<template>
  <router-view v-slot="{ Component }">
    <transition name="slide-right">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<!-- <script lang="ts" setup></script> -->

<style lang="less" scoped>
.slide-right-enter-active {
  transition: all 0.4s ease;
  transition-property: opacity, transform;
}

.slide-right-leave-active {
  display: none;
  // transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-right-enter-from {
  transform: translateX(-10%);
  opacity: 0;
}
</style>
