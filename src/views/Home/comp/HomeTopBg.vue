<script lang="ts" setup></script>
<template>
  <div class="HomeTopBg">
    <img src="@/assets/HomeTopBg.jpg" />

    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.HomeTopBg {
  position: absolute;
  width: 100%;
  height: 732px;
  color: #fff;
  // background: url('@/assets/news-header-bg.jpg') no-repeat center center;
  // background-size: auto 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
