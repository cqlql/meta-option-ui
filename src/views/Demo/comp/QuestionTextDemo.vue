<script lang="ts" setup>
import { computed, ref } from 'vue'
import QuestionText from '@/views/Finance/comp/QuestionText.vue'

const visible = ref(false)
const btnText = computed(() => {
  return visible.value ? '隐藏' : '显示'
})
</script>
<template>
  <a-button @click="visible = !visible">{{ btnText }}</a-button>

  <QuestionText v-show="visible"></QuestionText>
</template>
