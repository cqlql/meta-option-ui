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
</script>
<template>
  <CardBox class="USDTAccount text-5xl" title="USDT Account">
    <a-form layout="vertical" class="!pt-6" :model="formState">
      <a-form-item>
        <template #label>
          <div class="flex justify-between">
            <div>Transfer to ERC20 Address</div>
            <div>
              <a-checkbox></a-checkbox>
            </div>
          </div>
        </template>
        <a-textarea
          v-model:value="formState.fieldA"
          placeholder="input placeholder"
          :auto-size="{ minRows: 3, maxRows: 5 }"
        />
      </a-form-item>
      <a-form-item>
        <template #label>
          <div class="flex justify-between">
            <div>Transfer to TRC20 Address</div>
            <div>
              <a-checkbox></a-checkbox>
            </div>
          </div>
        </template>
        <a-textarea
          v-model:value="formState.fieldA"
          placeholder="input placeholder"
          :auto-size="{ minRows: 3, maxRows: 5 }"
        />
      </a-form-item>
      <a-form-item>
        <template #label>
          <div class="flex justify-between">
            <div>Transfer to OMNI Address</div>
            <div>
              <a-checkbox></a-checkbox>
            </div>
          </div>
        </template>
        <a-textarea
          v-model:value="formState.fieldA"
          placeholder="input placeholder"
          :auto-size="{ minRows: 3, maxRows: 5 }"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 24 }">
        <div class="flex justify-center">
          <a-button type="primary" class="big mt-5 !w-6/10">Confirm</a-button>
        </div>
      </a-form-item>
    </a-form>
  </CardBox>
</template>

<style lang="less">
.USDTAccount {
  .ant-form-vertical .ant-form-item-label > label {
    display: block;
  }
}
</style>
