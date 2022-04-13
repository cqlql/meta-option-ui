<script lang="ts" setup>

</script>
<template>
  <div class="LabelValue">
  <span>label</span>
  <span>value</span>
  </div>
</template>

<style lang="less" scoped>
.LabelValue {
  display: flex;
  height: 60px;
  line-height: 60px;
  background-color: #020220;
  border-radius: 6px;
  border: solid 2px #333d51;
  font-size: 24px;

  & > span {
    padding: 0 30px;
    color: #fff;

    &:first-child {
      border-right: solid 2px #333d51;
      color: #a2a9bb;
    }
  }
}
</style>
