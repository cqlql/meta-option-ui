<template>
  <Transition name="slide-right">
    <router-view />
  </Transition>
</template>

<!-- <script lang="ts" setup></script> -->

<style lang="less" scoped>
.slide-right-enter-active {
  transition: all 0.3s ease;
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
