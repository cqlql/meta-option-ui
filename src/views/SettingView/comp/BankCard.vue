<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
import { inject, reactive, UnwrapRef } from 'vue'

import CardBox from '@/components/CardBox.vue'
import { TabVal } from '../types'
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

const tabVal = inject<TabVal>('tabVal')
</script>
<template>
  <div class="BankCard">
    <div class="enter-y">
      <a @click="tabVal = 'MyAccount'">
        <Icon icon="ic:baseline-keyboard-arrow-left"></Icon> back
      </a>
    </div>

    <CardBox class="BankCardBox enter-y" title="Bank Card">
      <a-form
        class="form-s2 !pt-5"
        :model="formState"
        :labelCol="{ span: 8 }"
        :wrapperCol="{ span: 16 }"
      >
        <a-form-item label="Bank Name">
          <a-input
            v-model:value="formState.fieldA"
            placeholder="input placeholder"
          />
        </a-form-item>
        <a-form-item label="Account Name">
          <a-input
            v-model:value="formState.fieldB"
            placeholder="input placeholder"
          />
        </a-form-item>
        <a-form-item label="Account No.">
          <a-input
            v-model:value="formState.fieldB"
            placeholder="input placeholder"
          />
        </a-form-item>
        <a-form-item label="Type">
          <a-input
            v-model:value="formState.fieldB"
            placeholder="input placeholder"
          />
        </a-form-item>
        <a-form-item label="IFSC code ">
          <a-input
            v-model:value="formState.fieldB"
            placeholder="input placeholder"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 24 }">
          <div class="flex justify-center">
            <a-button type="primary" class="big mt-4 !w-6/10">Confirm</a-button>
          </div>
        </a-form-item>
      </a-form>
    </CardBox>
  </div>
</template>

<style lang="less" scoped>
.BankCardBox {
  max-width: 500px;
  margin: 10px auto 0;
}
</style>
