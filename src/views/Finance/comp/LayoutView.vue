<script lang="ts" setup></script>
<template>
  <div class="LayoutView mt-8 mx-auto">
    <div class="chunk left enter-y">
      <div class="wrap"> <slot name="left"></slot> </div>
    </div>
    <div class="chunk right ml-15 enter-y">
      <div class="wrap"> <slot name="right"></slot> </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// @space: 30px;

.LayoutView {
  display: flex;
  max-width: 1024px;

  // padding-top: 23px;

  & > .chunk {
    flex: 1;
    // padding: 8px 8px;

    // &:first-child {
    //   padding-right: @space;
    // }

    // &:last-child {
    //   padding-left: @space;
    // }

    & > .wrap {
      max-width: 500px;
    }
  }

  & > .left {
    .TitleItem:first-child {
      // margin-bottom: 60px;
    }

    // .checkbox-plus > ::v-deep(.item:first-child) {
    //   margin-right: 15px;
    // }
  }

  & > .right {
    // .checkbox-plus {
    //   display: grid;
    //   grid-template-columns: 1fr 1fr;
    //   grid-row-gap: 15px;
    //   grid-column-gap: 15px;
    // }

    // .LabelInput {
    //   margin-top: 23px;
    // }
  }
}
</style>
