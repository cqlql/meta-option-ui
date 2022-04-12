<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
</script>
<template>
  <div class="LayoutHeader">
    <div class="logo">
      <img src="@/assets/logo-text-small.png" alt="" />
    </div>

    <div class="right">
      <div class="user">
        <div class="avatar">
          <Icon icon="ic:round-supervised-user-circle"></Icon>
          <!-- <img src="" alt="" /> -->
        </div>
        <div class="name">user1</div>
      </div>
      <div class="label-value">
        <span>Balance</span>
        <span>10,000.00</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.LayoutHeader {
  display: flex;
  justify-content: space-between;
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
  }
}
</style>
