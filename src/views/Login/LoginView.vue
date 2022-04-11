<script lang="ts" setup>
import { provide, ref } from 'vue'
import BgFull from '@/components/BgFull.vue'
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'
import { LoginState } from './types'
import { useRoute } from 'vue-router'

const route = useRoute()

const loginState = ref<LoginState>((route.query.form as LoginState) || 'login')

provide('loginState', loginState)
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
      <LoginForm v-if="loginState === 'login'" />
      <RegisterForm v-else />
    </div>
  </div>
</template>

<style lang="less">
@primary-color: #fc0;

.LoginView {
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // width: 550px;
  // margin: 0 auto;
  // display: flex;
  // // align-items: center;
  // justify-content: center;
  // color: #fff;

  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  min-height: 100vh;

  .center {
    height: 650px;
  }

  .ant-form {
    width: 580px;
    margin: 0 auto;

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
    // margin-top: 100px;

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

  a {
    color: #fff;
    font-size: 14px;

    &:hover {
      color: @primary-color;
      // color: #40a9ff;
    }
  }

  .link {
    color: @primary-color;

    &:hover {
      text-decoration: underline;
    }
  }

  .ant-checkbox-wrapper {
    color: #fff;
    font-size: 16px;
  }

  .ant-checkbox-inner {
    border-radius: 50px;
  }

  .ant-checkbox-checked::after,
  .ant-checkbox-inner::after {
    display: none;
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  // .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: @primary-color;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    // width: 16px;
    // height: 16px;
    border-color: @primary-color;
    background-color: @primary-color;
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

    .ant-col-offset-6 {
      margin: 0;
    }
  }
}
</style>
