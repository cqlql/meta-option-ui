<template>
  <div class="flex flex-wrap gap-2">
    <span v-for="name of list" :key="name" :name="name">
      <IconFont class="!text-4xl" :name="name"></IconFont>
    </span>
  </div>
</template>

<script lang="ts" setup>
import IconFont from './IconFont.vue'

let list = ['setting', 'internet', 'info', 'rise', 'deal', 'finance', 'home']
</script>
