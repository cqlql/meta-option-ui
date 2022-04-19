<script lang="ts" setup>
import { reactive } from 'vue'
import { DatePicker as ADatePicker, Select as ASelect } from 'ant-design-vue'

const formState = reactive({
  nickname: '',
  // birth: '',
  day: undefined,
  month: undefined,
  year: undefined,
  phone: '',
  email: '',
  password: '',
  newPassword: '',
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
        <a-row :gutter="12">
          <a-col :span="8">
            <a-select v-model:value="formState.day" placeholder="Day">
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-col>
          <a-col :span="8">
            <a-select v-model:value="formState.month" placeholder="Month">
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-col>
          <a-col :span="8">
            <a-select v-model:value="formState.year" placeholder="Year">
              <a-select-option value="1">1</a-select-option>
              <a-select-option value="2">2</a-select-option>
            </a-select>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item label="Phone" :rules="{ required: true }">
        <a-input v-model:value="formState.phone" placeholder="" />
      </a-form-item>
      <a-form-item label="Email">
        <a-input v-model:value="formState.email" placeholder="" />
      </a-form-item>
      <a-form-item label="Change Password">
        <a-row :gutter="12">
          <a-col :span="12">
            <a-input-password
              v-model:value="formState.password"
              placeholder="Old password"
            />
          </a-col>
          <a-col :span="12">
            <a-input-password
              v-model:value="formState.newPassword"
              placeholder="New password"
            />
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item class="text-right">
        <a-button type="primary">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="less" scoped>
.PersonalInfo {
  ::v-deep(.ant-input) {
    line-height: 30px;
  }

  .ant-picker {
    width: 100%;
    height: 42px;
  }
}
</style>
