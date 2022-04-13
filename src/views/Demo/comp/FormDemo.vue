<script lang="ts" setup>
import { computed, reactive } from 'vue'
import type { UnwrapRef } from 'vue'

interface FormState {
  layout: 'horizontal' | 'vertical' | 'inline'
  fieldA: string
  fieldB: string
}
const formState: UnwrapRef<FormState> = reactive({
  layout: 'horizontal',
  fieldA: '',
  fieldB: '',
})
</script>
<template>
  <a-form layout="vertical" :model="formState">
    <a-form-item label="Field A">
      <a-input
        v-model:value="formState.fieldA"
        placeholder="input placeholder"
      />
    </a-form-item>
    <a-form-item label="Field B">
      <a-input
        v-model:value="formState.fieldB"
        placeholder="input placeholder"
      />
    </a-form-item>
    <a-form-item>
      <a-button type="primary2">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
