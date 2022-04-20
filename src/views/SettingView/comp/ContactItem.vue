<script lang="ts" setup></script>
<template>
  <div class="ContactItem">
    <div class="left">
      <img src="" alt="" />
    </div>
    <div class="right">
      <div class="title">Contact me on telegram</div>
      <div class="number"> (+00) 123 456 789 </div>
      <div class="btn text-right">
        <a-button type="primary" class="!px-20">Go</a-button>
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

  .ant-btn {
    position: absolute;
    right: 25px;
    bottom: 25px;
    height: 30px;
    line-height: 1;
  }
}
</style>
