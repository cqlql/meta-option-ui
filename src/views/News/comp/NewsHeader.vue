<script lang="ts" setup></script>
<template>
  <div class="news-header">
    <img src="@/assets/news-header-bg.jpg" />

    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.news-header {
  position: relative;
  // width: 1358px;
  height: 400px;
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
