<script lang="ts" setup>
import { inject, reactive, Ref, ref } from 'vue'
import ButtonYellow from '@/components/Button/ButtonYellow.vue'
import { LoginState } from './types'
interface FormState {
  account: string
  nickName: string
  password: string
  agree: boolean
}
const formState = reactive<FormState>({
  account: '',
  nickName: '',
  password: '',
  agree: false,
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
    class="form -enter-y"
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
      label="NickName"
      name="nickName"
      :rules="[{ required: true, message: 'Please input your NickName!' }]"
    >
      <a-input v-model:value="formState.nickName" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <!-- <div class="login-form-wrap"> -->
    <a-form-item
      class="!mb-2"
      :wrapper-col="{ offset: 6, span: 18 }"
      name="agree"
    >
      <a-checkbox v-model:checked="formState.agree">
        <span> Read and Agree </span>
        <a class="link" href="">&lt;&lt;Terms of Service&gt;&gt;</a>
      </a-checkbox>
    </a-form-item>

    <!-- </div> -->

    <a-form-item class="!mb-0" :wrapper-col="{ offset: 6, span: 18 }">
      <ButtonYellow type="primary" block html-type="submit" shape="round">
        Register
      </ButtonYellow>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 6, span: 18 }">
      <div class="flex justify-between">
        <a href="javascript:;">Forget Password</a>
        <router-link
          href="javascript:;"
          @click="loginState = 'login'"
          :to="{ query: { form: 'login' } }"
          >Log In</router-link
        >
      </div>
    </a-form-item>
  </a-form>
</template>

<!-- <style lang="less" scoped></style> -->
