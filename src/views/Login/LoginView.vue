<script lang="ts" setup>
import { provide, reactive, ref } from 'vue'
import BgFull from '@/components/BgFull.vue'
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';
import { LoginState } from './types';

interface FormState {
  // areaCode?: string
  account: string
  password: string
  remember: boolean
}

const loginState = ref<LoginState>('login')

provide('loginState',loginState)

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
</script>
<template>
  <BgFull></BgFull>
  <div class="LoginView">
    <div class="center">
      <div class="top -enter-y">
        <div class="logo">
          <img src="@/assets/logo-text.png" alt="" />
        </div>
      </div>
      <LoginForm v-if="loginState==='login'" />
      <RegisterForm v-else />
    </div>
  </div>
</template>

<style lang="less" scoped>
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

  &::v-deep(.ant-form) {
    width: 580px;
    margin: 0 auto;

    a {
      color: #fff;
      font-size: 14px;

      &:hover {
        color: #40a9ff;
      }
    }

    .ant-form-item-label > label {
      color: #fff;
      font-size: 24px;
    }

    // .ant-radio-group-solid {
    //   .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
    //     box-shadow: none;
    //   }
    // }

    .ant-form-item-control-input {
      min-height: 34px;
    }

    // .ant-radio-group {
    //   display: flex;
    // }

    // .ant-radio-button-wrapper {
    //   flex: 1;
    //   height: 46px;
    //   line-height: 46px;
    //   font-size: 16px;
    // }

    // .ant-radio-button-wrapper:first-child {
    //   border-radius: 6px 0 0 6px;
    // }

    // .ant-radio-button-wrapper:last-child {
    //   border-radius: 0 6px 6px 0;
    // }

    // .ant-input-group {
    //   input:first-child {
    //     border-radius: 6px 0 0 6px;
    //   }

    //   input:last-child {
    //     border-radius: 0 6px 6px 0;
    //   }
    // }

    .ant-input {
      font-size: 16px;
      border-radius: 6px;
    }

    .ant-input-password {
      border-radius: 6px;
    }

    .ant-btn {
      height: 38px;
    }
  }

  .top {
    display: flex;
    margin-bottom: 100px;
    margin-top: 100px;

    .logo {
      width: 729px;
      // margin-right: 54px;
    }

    // .right {
    //   flex: 1;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: center;
    // }

    // .logoText {
    //   height: 50px;
    // }

    // .des {
    //   font-size: 29px;
    //   letter-spacing: 1px;
    //   line-height: 58px;
    // }
  }
}

@media (max-width: 800px) {
  .LoginView {
    .top {
      margin-bottom: 10%;
      margin-top: 10%;

      .logo {
        width: 80%;
        margin: 0 auto;
        // margin-right: 54px;
      }
    }
  }
}

@media (max-width: 575px) {
  .LoginView {
    .ant-form {
      width: auto;
    }

    &::v-deep(.ant-col-offset-6) {
      margin: 0;
    }
  }
}
</style>
