<script lang="ts" setup>
import { Avatar as AAvatar } from 'ant-design-vue'
defineProps<{
  src: string
}>()
</script>
<template>
  <div class="avatar">
    <a-avatar :src="src"> </a-avatar>
    <div class="info">xxxxxx</div>
  </div>
</template>

<style lang="less" scoped>
@size: 90px;

.avatar {
  position: relative;
  width: @size;
  height: @size;
  border: 3px solid #fa3c47;
  border-radius: @size;

  .info {
    position: absolute;
    left: ((@size - 56px)/2);
    bottom: -8px;
    width: 56px;
    height: 16px;
    line-height: 1;
    line-height: 16px;
    font-size: 14px;
    text-align: center;
    background: #fa3c47;
    border-radius: 8px 0 8px 0;
    text-indent: -2px;
  }

  .ant-avatar {
    width: (@size - 6);
    height: (@size - 6);
  }
}
</style>
