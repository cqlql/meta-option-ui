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
    color: #fff;
    font-size: 24px;
    margin-bottom: 20px;

    &::v-deep(.ant-checkbox-inner) {
      width: 24px;
      height: 24px;

      &::after {
        width: 7.714286px;
        height: 13.142857px;
      }
    }

    &::v-deep(.ant-checkbox-wrapper) {
      font-size: 24px;
    }
  }
}
</style>
