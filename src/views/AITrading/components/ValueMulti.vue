<script lang="ts" setup>
defineProps<{
  no?: string
  text: string
}>()
</script>
<template>
  <div class="MultiText">
    <div v-if="no" class="no">{{ no }}.</div>
    <div class="r">
      <div class="text">
        {{ text }}
      </div>
      <div class="tags">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.MultiText {
  display: flex;

  .no {
  }

  .r {
  }

  .tags {
    display: grid;
    align-items: center;
    grid-template-rows: auto;
    grid-auto-columns: auto;
    grid-gap: 8px;
    grid-auto-flow: column;
  }
}
</style>
