<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
import { Popover as APopover } from 'ant-design-vue'
import LangList from './comp/LangList.vue'
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
      <a-popover
        :overlayClassName="$style.popover"
        placement="bottom"
        trigger="click"
      >
        <template #content>
          <LangList></LangList>
        </template>

        <div class="item btn-box select-locale">
          <img
            class="flag-icon"
            width="23"
            height="15"
            src="/static/flags/languages/zh-Hans.png"
          />
          <span class="title">简体中文</span>
        </div>
      </a-popover>
    </div>
  </div>
</template>
<style lang="less" module>
.popover {
  :global {
    .ant-popover-inner-content {
      padding: 0;
    }
  }
}
</style>
<style lang="less" scoped>
.LayoutHeader {
  display: flex;
  justify-content: space-between;
  height: 100%;
  color: #fff;

  .logo {
    padding-top: 10px;
    padding-left: 20px;

    img {
      width: 202px;
      height: 41px;
    }
  }

  .right {
    display: flex;
    align-items: center;

    .item {
      margin-right: 20px;
    }
  }

  .user {
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
      line-height: 30px;
      color: #fff;
      text-align: center;
      font-style: normal;
      font-weight: 600;
      border-radius: 16px;
      background-color: #0871cd;
    }

    .dummy::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      display: block;
      width: 50%;
      height: 100%;
      background-color: hsla(0, 0%, 100%, 0.1);
      border-radius: 0 16px 16px 0;
    }
  }

  .label-value {
    display: flex;
    align-items: center;

    .label {
      font-size: 19px;
      margin-right: 15px;
    }

    .value {
      padding: 0 38px;
      font-size: 14px;
    }
  }

  .btn-box {
    height: 34px;
    line-height: 34px;
    background-color: #21293a;
    border-radius: @border-radius-base;
    border: solid 1px #424b60;
  }

  .add-btn {
    display: flex;

    .title {
      line-height: 34px;
      padding: 0 27px;
      font-size: 14px;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      font-size: 18px;
      border-left: solid 1px #424b60;
    }
  }

  .select-locale {
    position: relative;
    display: flex;
    align-items: center;
    height: 34px;
    line-height: 43px;
    padding: 0 15px;
    color: #7889a2;
    cursor: pointer;
    transition: background-color 0.2s;
    font-weight: 400;

    &:hover {
      background-color: #2b3240;
    }

    .flag-icon {
      margin-right: 9px;
    }
  }
}
</style>
