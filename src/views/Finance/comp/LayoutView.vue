<script lang="ts" setup></script>
<template>
  <div class="LayoutView mt-8">
    <div class="chunk left enter-y">
      <div class="wrap"> <slot name="left"></slot> </div>
    </div>
    <div class="chunk right enter-y">
      <div class="wrap"> <slot name="right"></slot> </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.LayoutView {
  display: flex;
  // padding-top: 23px;

  & > .chunk {
    flex: 1;
    // padding: 8px 8px;

    &:first-child {
      padding-right: 10px;
    }

    &:last-child {
      padding-left: 10px;
    }

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
