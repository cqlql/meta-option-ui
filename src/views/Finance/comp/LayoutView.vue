<script lang="ts" setup></script>
<template>
  <div class="LayoutView">
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
  // padding-top: 30px;

  & > .chunk {
    flex: 1;
    padding: 10px 10px;

    & > .wrap {
      max-width: 500px;
    }
  }

  & > .left {
    .TitleItem:first-child {
      // margin-bottom: 80px;
    }

    // .checkbox-plus > ::v-deep(.item:first-child) {
    //   margin-right: 20px;
    // }
  }

  & > .right {
    // .checkbox-plus {
    //   display: grid;
    //   grid-template-columns: 1fr 1fr;
    //   grid-row-gap: 20px;
    //   grid-column-gap: 20px;
    // }

    // .LabelInput {
    //   margin-top: 30px;
    // }
  }
}
</style>
