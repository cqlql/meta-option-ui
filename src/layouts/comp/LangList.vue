<script lang="ts" setup></script>
<template>
  <div class="langList">
    <div v-for="v of 14" :key="v" :class="{ active: v === 1 }" class="langItem">
      <img
        class="flag-icon"
        src="https://static.expertoption.com/flags/languages/png/zh-Hans.png?v=1"
      />

      <span>简体中文</span>
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
