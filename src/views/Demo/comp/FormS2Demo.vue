<script lang="ts" setup>
import { reactive } from 'vue'
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
  <a-form
    class="form-s2"
    :model="formState"
    :labelCol="{ span: 8 }"
    :wrapperCol="{ span: 14 }"
  >
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
    <a-form-item :wrapper-col="{ span: 14, offset: 8 }">
      <a-button type="primary2">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<style lang="less"></style>
