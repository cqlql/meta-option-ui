<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>
<template>
  <div class="TitleItem">
    <h3>
      <span>{{ title }}</span>
      <span>
        <slot name="titleRight"></slot>
      </span>
    </h3>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.TitleItem {
  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
    color: #fff;
    font-size: 18px;
    margin-bottom: 21px;
  }
}
</style>
