<script lang="ts" setup>
import { Select as ASelect } from 'ant-design-vue'

const options = [
  {
    value: '1px',
  },
  {
    value: '2px',
  },
  {
    value: '3px',
  },
  {
    value: '4px',
  },
  {
    value: '5px',
  },
]
</script>
<template>
  <a-select value="2px" :options="options"> </a-select>
</template>
