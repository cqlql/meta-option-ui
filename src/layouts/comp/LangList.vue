<script lang="ts" setup>
const list = [
  {
    icon: '/static/flags/languages/en.png',
    label: 'English',
  },
  {
    icon: '/static/flags/languages/zh-Hans.png',
    label: '简体中文',
  },
]
</script>
<template>
  <div class="langList">
    <div
      v-for="(item, index) of list"
      :key="index"
      :class="{ active: index === 1 }"
      class="langItem"
    >
      <img class="flag-icon" :src="item.icon" />

      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.langList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 400px;

  .langItem {
    display: flex;
    align-items: center;
    // width: 200px;
    height: 38px;
    padding: 0 30px;

    &:hover {
      background-color: hsla(0, 0%, 100%, 0.05);
    }

    &.active {
      background-color: #3099f5;
    }
  }

  .flag-icon {
    margin-right: 12px;
    width: 23px;
    height: 15px;
  }
}
</style>
