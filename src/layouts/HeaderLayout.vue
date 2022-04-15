<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
</script>
<template>
  <div class="LayoutHeader">
    <div class="logo">
      <img src="@/assets/logo/logo-text-small.png" alt="" />
    </div>

    <div class="right">
      <div class="item user">
        <div class="avatar mr-3">
          <i class="image dummy"></i>
          <!-- <img src="http://www.wenzizhan.com/Img/header/ASQW12546.jpg" alt="" /> -->
        </div>
        <div class="name">user</div>
      </div>
      <div class="item label-value">
        <span class="label">Balance</span>
        <span class="btn-box value">10,000.00</span>
      </div>
      <div class="item btn-box add-btn">
        <span class="title">Top Up</span>
        <span class="icon">
          <Icon icon="ic:baseline-add"></Icon>
        </span>
      </div>
      <div class="item btn-box select-locale">
        <img
          class="flag-icon"
          width="23"
          height="15"
          src="https://static.expertoption.com/flags/languages/png/zh-Hans.png?v=1"
        />
        <span class="title">简体中文</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.LayoutHeader {
  display: flex;
  justify-content: space-between;
  height: 100%;
  color: #fff;

  .logo {
    padding-top: 13px;
    padding-left: 26px;

    img {
      width: 269px;
      height: 54px;
    }
  }

  .right {
    display: flex;
    align-items: center;

    .item {
      margin-right: 26px;
    }
  }

  .user {
    display: flex;
    align-items: center;
    font-size: 18px;

    .avatar {
      display: block;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      overflow: hidden;
    }

    .image {
      display: block;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-color: #0d1424;
    }

    .dummy {
      position: relative;
      display: block;
      line-height: 40px;
      color: #fff;
      text-align: center;
      font-style: normal;
      font-weight: 600;
      border-radius: 21px;
      background-color: #0871cd;
    }

    .dummy::after {
      position: absolute;
      left: 50%;
      top: 0;
      display: block;
      width: 50%;
      height: 100%;
      content: '';
      background-color: hsla(0, 0%, 100%, 0.1);
      border-radius: 0 21px 21px 0;
    }
  }

  .label-value {
    display: flex;
    align-items: center;

    .label {
      font-size: 25px;
      margin-right: 20px;
    }

    .value {
      padding: 0 50px;
      font-size: 18px;
    }
  }

  .btn-box {
    height: 45px;
    line-height: 45px;
    background-color: #21293a;
    border-radius: @border-radius-base;
    border: solid 1px #424b60;
  }

  .add-btn {
    display: flex;

    .title {
      line-height: 45px;
      padding: 0 36px;
      font-size: 18px;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      font-size: 24px;
      border-left: solid 1px #424b60;
    }
  }

  .select-locale {
    position: relative;
    display: flex;
    align-items: center;
    height: 45px;
    line-height: 57px;
    padding: 0 20px;
    color: #7889a2;
    cursor: pointer;
    transition: background-color 0.2s;
    font-weight: 400;

    &:hover {
      background-color: #2b3240;
    }

    .flag-icon {
      margin-right: 12px;
    }
  }
}
</style>
