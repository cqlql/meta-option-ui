<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>
<template>
  <div class="CardBox">
    <div class="tit">
      {{ title }}
    </div>
    <div class="cont">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.CardBox {
  background-color: #263042;
  box-shadow: -7px 4px 44px 0 rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  border: solid 2px #333d51;
  padding: 2px 10px 10px;
  color: #898e9e;

  .tit {
    display: flex;
    align-items: center;
    height: 50px;
  }

  .cont {
  }
}
</style>
