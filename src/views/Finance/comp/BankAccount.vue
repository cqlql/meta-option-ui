<script lang="ts" setup>
import CardBox from '@/components/CardBox.vue'
import { reactive } from 'vue'
import type { UnwrapRef } from 'vue'

interface FormState {
  layout: 'horizontal' | 'vertical' | 'inline'
  fieldA: string
  fieldB: string
}
const formState: UnwrapRef<FormState> = reactive({
  layout: 'horizontal',
  fieldA: 'ABA Bank',
  fieldB: '',
})

defineProps<{
  noTitle?: boolean
}>()
</script>
<template>
  <CardBox class="BankAccount" noTitle title="Bank Account">
    <a-form
      class="form-s2 !pt-5"
      :model="formState"
      :labelCol="{ span: 8 }"
      :wrapperCol="{ span: 16 }"
    >
      <a-form-item label="ABA Bank">
        <a-input v-model:value="formState.fieldA" />
      </a-form-item>
      <a-form-item label="Account Name">
        <a-input v-model:value="formState.fieldB" />
      </a-form-item>
      <a-form-item label="Account No.">
        <a-input v-model:value="formState.fieldB" />
      </a-form-item>
      <a-form-item label="Type">
        <a-input v-model:value="formState.fieldB" />
      </a-form-item>
      <a-form-item label="IFSC code ">
        <a-input v-model:value="formState.fieldB" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 24 }">
        <div class="flex justify-center">
          <a-button type="primary" class="big mt-4 !w-6/10">Confirm</a-button>
        </div>
      </a-form-item>
    </a-form>
  </CardBox>
</template>
