<script lang="ts" setup>
import { reactive, ref } from 'vue'
import BgFull from '@/components/BgFull.vue'
import ButtonYellow from '@/components/Button/ButtonYellow.vue'

interface FormState {
  areaCode?: string
  account: string
  password: string
  remember: boolean
}
const formState = reactive<FormState>({
  areaCode: '+86',
  account: '',
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
      <div class="top -enter-y">
        <div class="logo">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="right">
          <div class="logoText">
            <img class="mx-auto" src="@/assets/logo-text.png" alt="" />
          </div>
          <div class="des"> New Generation Trading Platform </div>
        </div>
      </div>
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
        <a-form-item class="tab" :wrapper-col="{ offset: 6, span: 18 }">
          <a-radio-group v-model:value="loginType" button-style="solid">
            <a-radio-button value="eMail">E-mail Address</a-radio-button>
            <a-radio-button value="phone">Phone Number</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item
          v-if="loginType === 'eMail'"
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
          <a-input
            placeholder="E-mail Address"
            v-model:value="formState.account"
          />
        </a-form-item>

        <a-form-item
          v-else
          label="Account"
          name="account"
          :rules="[{ required: true, message: 'Please input your account!' }]"
        >
          <a-input-group compact>
            <a-input v-model:value="formState.areaCode" style="width: 20%" />
            <a-input
              v-model:value="formState.account"
              style="width: 80%"
              placeholder="Phone Number"
            />
          </a-input-group>
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item
          style="margin-bottom: 0"
          :wrapper-col="{ offset: 6, span: 18 }"
        >
          <ButtonYellow type="primary" block html-type="submit" shape="round">
            Log In
          </ButtonYellow>
        </a-form-item>

        <a-row class="mt-2 text-light-50">
          <a-col :offset="6" :span="18">
            <div class="flex justify-between">
              <a href="javascript:;">Forget Password</a>
              <a href="javascript:;">Log In</a>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </div>
  </div>
</template>

<style lang="scss">
.LoginView {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // width: 550px;
  // margin: 0 auto;
  display: flex;
  // align-items: center;
  justify-content: center;
  color: #fff;

  a {
    color: #fff;
    font-size: 14px;

    &:hover {
      color: #40a9ff;
    }
  }

  .ant-form {
    .ant-form-item-label > label {
      color: #fff;
      font-size: 24px;
    }

    .ant-radio-group-solid {
      .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
        box-shadow: none;
      }
    }

    .ant-form-item-control-input {
      min-height: 34px;
    }

    .ant-radio-group {
      display: flex;
    }

    .ant-radio-button-wrapper {
      flex: 1;
      height: 46px;
      line-height: 46px;
      font-size: 16px;
    }

    .ant-input {
      font-size: 16px;
      border-radius: 6px;
    }

    .ant-input-password {
      border-radius: 6px;
    }

    .ant-radio-button-wrapper:first-child {
      border-radius: 6px 0 0 6px;
    }

    .ant-radio-button-wrapper:last-child {
      border-radius: 0 6px 6px 0;
    }

    .ant-btn {
      height: 38px;
    }

    .ant-input-group {
      input:first-child {
        border-radius: 6px 0 0 6px;
      }

      input:last-child {
        border-radius: 0 6px 6px 0;
      }
    }
  }

  .top {
    display: flex;
    margin-bottom: 100px;
    margin-top: 100px;

    .logo {
      width: 189px;
      height: 216px;
      margin-right: 54px;
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .logoText {
      height: 50px;
    }

    .des {
      font-size: 29px;
      letter-spacing: 1px;
      line-height: 58px;
    }
  }

  .form {
    width: 580px;
    margin: 0 auto;

    .tab {
      text-align: center;
    }
  }
}

@media (max-width: 575px) {
  .LoginView {
    .form {
      width: auto;
    }

    .ant-form-item-control {
      margin: 0;
    }
  }
}
</style>
