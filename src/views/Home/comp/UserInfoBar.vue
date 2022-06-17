<script lang="ts" setup></script>
<template>
  <div class="UserInfoBar">
    <div class="avatar">
      <img src="http://www.wenzizhan.com/Img/header/ASQW12546.jpg" alt="" />
    </div>
    <div class="name"> Nickname </div>
  </div>
</template>

<style lang="less" scoped>
.UserInfoBar {
  display: flex;
  align-items: center;
  font-size: 14px;

  .avatar {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
  }

  .name {
    margin-left: 8px;
  }

  // .image {
  //   display: block;
  //   width: 100%;
  //   height: 100%;
  //   background-size: cover;
  //   background-color: #0d1424;
  // }
}
</style>
