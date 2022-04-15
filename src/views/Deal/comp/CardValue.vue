<script lang="ts" setup>
defineProps<{
  title: string
  value: string
}>()
</script>
<template>
  <div class="CardValue">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="des">
      <div class="title">{{ title }}</div>
      <div class="value">{{ value }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.CardValue {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background-color: #263042;
  box-shadow: 0 10px 58px 0 rgba(0, 0, 0, 0.24);
  border-radius: @border-radius-base;
  border: solid 2px #333d51;

  .icon {
    color: #46aefc;
    font-size: 50px;
    margin-right: 20px;

    ::v-deep(.anticon) {
      display: block;
    }
  }

  .des {
    // flex: 1;
  }

  .title {
    color: #a2a9bb;
  }

  .value {
    font-size: 24px;
  }
}
</style>
