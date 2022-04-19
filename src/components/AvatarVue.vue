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
@size: 68px;

.avatar {
  position: relative;
  width: @size;
  height: @size;
  border: 3px solid #fa3c47;
  border-radius: @size;

  .info {
    position: absolute;
    left: ((@size - 42px)/2);
    bottom: -6px;
    width: 42px;
    height: 12px;
    line-height: 1;
    line-height: 12px;
    font-size: 11px;
    text-align: center;
    background: #fa3c47;
    border-radius: 6px 0 6px 0;
    text-indent: -1px;
  }

  .ant-avatar {
    width: (@size - 6);
    height: (@size - 6);
  }
}
</style>
