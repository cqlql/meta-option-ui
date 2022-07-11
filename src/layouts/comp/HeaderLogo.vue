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
    from {
      transform: translateY(-3px);
    }

    to {
      transform: translateY(3px);
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
