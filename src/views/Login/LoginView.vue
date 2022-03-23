<script lang="ts" setup>
import { reactive, ref } from 'vue'
import BgFull from '@/components/BgFull.vue'

interface FormState {
  username: string
  password: string
  remember: boolean
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
})

const loginType = ref<'eMail' | 'phone'>('eMail')

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>
<template>
  <BgFull></BgFull>
  <div class="LoginView">
    <div class="center">
      <div class="top">
        <div class="logo">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="right">
          <div class="logoText">
            <img src="@/assets/logo-text.png" alt="" />
          </div>
          <div class="des"> New Generation Trading Platform </div>
        </div>
      </div>
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
        <a-form-item class="tab" :wrapper-col="{ offset: 6, span: 18 }">
          <a-radio-group v-model:value="loginType" button-style="solid">
            <a-radio-button value="eMail">E-mail Address</a-radio-button>
            <a-radio-button value="phone">Phone Number</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          label="Account"
          name="account"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 6, span: 18 }">
          <a-button type="primary" block html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.LoginView {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // width: 550px;
  // margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .top {
    display: flex;

    .logo {
      width: 189px;
      height: 216px;
      margin-right: 54px;
    }

    .right {
      flex: 1;
    }

    .logoText {
    }

    .des {
    }
  }

  .form {
    .tab {
      text-align: center;
    }

    :deep(.ant-radio-group) {
      display: flex;
    }

    :deep(.ant-radio-button-wrapper) {
      flex: 1;
    }
  }
}

@media (max-width: 575px) {
  .LoginView {
    width: auto;
    margin: 0 15px;

    // :deep(.ant-col-offset-6) {
    //   margin: 0;
    // }
    :deep(.ant-form-item-control) {
      margin: 0;
    }
  }
}
</style>
