<script lang="ts" setup>
import { reactive } from 'vue'
import { DatePicker as ADatePicker } from 'ant-design-vue'

const formState = reactive({
  nickname: '',
  birth: '',
})
</script>
<template>
  <div class="PersonalInfo">
    <a-form layout="vertical" :model="formState">
      <a-form-item label="Nickname" :rules="{ required: true }">
        <a-input
          v-model:value="formState.nickname"
          placeholder="input placeholder"
        />
      </a-form-item>
      <a-form-item label="Date of birth">
        <a-date-picker v-model:value="formState.birth" />
      </a-form-item>
      <a-form-item class="text-right">
        <a-button type="primary">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="less" scoped>
.PersonalInfo {
  .ant-input {
    line-height: 30px;
  }

  .ant-picker {
    width: 100%;
    height: 42px;
  }
}
</style>
