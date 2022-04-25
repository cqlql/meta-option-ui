<script lang="ts" setup>
import { inject, reactive, Ref } from 'vue'
import ButtonYellow from '@/components/Button/ButtonYellow.vue'
import { LoginState } from './types'
interface FormState {
  // areaCode?: string
  account: string
  password: string
  remember: boolean
}
const formState = reactive<FormState>({
  // areaCode: '+86',
  account: '',
  password: '',
  remember: true,
})

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const loginState = inject('loginState') as Ref<LoginState>
</script>
<template>
  <a-form
    class="form"
    :model="formState"
    name="basic"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 18 }"
    autocomplete="off"
    hideRequiredMark
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Account"
      name="account"
         class="enter-y"
      :rules="[
        { required: true, message: 'Please input your account!' },
        {
          pattern: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
          message: 'Please input the correct email address!',
        },
      ]"
    >
      <a-input v-model:value="formState.account" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
         class="enter-y"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <div class="enter-y">
      <a-form-item class="!mb-0" :wrapper-col="{ offset: 6, span: 18 }">
      <ButtonYellow type="primary" block html-type="submit" shape="round">
        Log In
      </ButtonYellow>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 6, span: 18 }">
      <div class="flex justify-between">
        <a href="javascript:;">Forget Password</a>
        <router-link
          @click="loginState = 'register'"
          :to="{ query: { form: 'register' } }"
          >Register</router-link
        >
      </div>
    </a-form-item>
  </div>
  </a-form>
</template>


