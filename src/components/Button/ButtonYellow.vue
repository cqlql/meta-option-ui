<script lang="ts" setup></script>
<template>
  <a-button class="ButtonYellow" v-bind="$attrs"><slot></slot></a-button>
</template>

<style lang="scss" scoped>
.ButtonYellow {
  background-color: #fc0;
  border-color: #fc0;
  color: #000;

  &:hover {
    background-color: #ffe168;
    border-color: #ffe168;
  }

  &:active {
    background-color: #fc0;
    border-color: #fc0;
  }
}
</style>
