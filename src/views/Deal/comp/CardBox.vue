<script lang="ts" setup></script>
<template>
  <div class="CardBox"> <slot></slot> </div>
</template>

<style lang="less" scoped>
.CardBox {
  background-color: #263042;
  box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
  border-radius: @border-radius-base;
  border: solid 2px #333d51;
}
</style>
