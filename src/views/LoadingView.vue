<script lang="ts" setup></script>
<template>
  <div class="app-loading">
    <div class="app-loading-wrap">
      <img src="@/assets/logo/logo.png" class="app-loading-logo" alt="Logo" />

      <!-- <div class="app-loading-title"> </div> -->
    </div>
  </div>
</template>

<style scoped>
html[data-theme='dark'] .app-loading {
  background-color: #2c344a;
}

html[data-theme='dark'] .app-loading .app-loading-title {
  color: rgb(255 255 255 / 85%);
}

.app-loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #f4f7f9;
}

.app-loading .app-loading-wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate3d(-50%, -50%, 0);
  flex-direction: column;
}

.app-loading .dots {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 98px;
}

.app-loading .app-loading-title {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(0 0 0 / 85%);
  font-size: 30px;
  margin-top: 30px;
}

.app-loading .app-loading-logo {
  display: block;
  width: 90px;
  margin: 0 auto;
  margin-bottom: 20px;
  transition: all 1s;
  animation: jump 1s ease-in-out infinite alternate;
}

@keyframes jump {
  0%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateZ(0);
  }

  40% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -20px, 0);
  }
}
</style>
