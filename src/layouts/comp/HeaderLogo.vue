<script lang="ts" setup></script>
<template>
  <div class="HeaderLogo">
    <div class="logo">
      <img src="@/assets/logo/logo.png" alt="" />
    </div>
    <div class="logo-text">
      <img src="@/assets/logo/logo-only-text.png" alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.HeaderLogo {
  @keyframes jump {
    0%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      -webkit-transform: translate3d(0, 6px, 0);
      transform: translate3d(0, 6px, 0);
    }

    // 40% {
    //   -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    //   animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    //   -webkit-transform: translate3d(0, -3px, 0) scaleY(1.1);
    //   transform: translate3d(0, -3px, 0) scaleY(1.1);
    // }

    40% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      -webkit-transform: translate3d(0, -3px, 0) scaleY(1.05);
      transform: translate3d(0, -3px, 0) scaleY(1.05);
    }
  }

  display: flex;
  font-size: 100px;

  .logo {
    width: 0.47em;
    height: 0.54em;
    transition: all 1s;
    animation: jump 1s ease-in-out infinite alternate;
  }

  .logo-text {
    display: flex;
    align-items: center;
    margin-left: 0.19em;

    img {
      height: 0.4em;
    }
  }
}
</style>
