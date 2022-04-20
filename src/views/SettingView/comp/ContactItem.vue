<script lang="ts" setup></script>
<template>
  <div class="ContactItem">
    <div class="left">
      <slot></slot>
    </div>
    <div class="right">
      <div class="title"><slot name="title"></slot></div>
      <div class="number"><slot name="number"></slot></div>
      <div class="btn text-right">
        <slot name="btn"></slot>
        <!-- <a-button type="primary" class="!px-20">Go</a-button> -->
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ContactItem {
  display: flex;
  box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
  border-radius: @border-radius-base;
  border: solid 1px #424b60;

  .left {
    width: 234px;
    height: 168px;
    background-color: #171e2d;
  }

  ::v-deep(img) {
    height: 100%;
    margin: 0 auto;
  }

  .right {
    position: relative;
    width: 398px;
    padding: 30px 25px 25px 36px;
    flex: 1;
  }

  .title {
    line-height: 1;
    font-size: 18px;
  }

  .number {
    line-height: 40px;
  }

  ::v-deep(.ant-btn) {
    position: absolute;
    right: 25px;
    bottom: 25px;
    height: 30px;
    line-height: 1;
    padding: 0 70px;
  }
}
</style>
