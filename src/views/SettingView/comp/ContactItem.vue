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
        <a-button>Go</a-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ContactItem {
  display: flex;

  .left {
    width: 310px;
    height: 220px;
  }

  .right {
    flex: 1;
  }
}
</style>
