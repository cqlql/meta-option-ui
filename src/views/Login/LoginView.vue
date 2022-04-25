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
          <img src="@/assets/logo/logo-text.png" alt="" />
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
  // width: 413px;
  // margin: 0 auto;
  // display: flex;
  // // align-items: center;
  // justify-content: center;
  // color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  min-height: 100vh;

  .center {
    height: 488px;
  }

  .ant-form {
    width: 435px;
    margin: 0 auto;

    .ant-form-item-label > label {
      color: #fff;
      font-size: 18px;
    }

    // .ant-radio-group-solid {
    //   .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
    //     box-shadow: none;
    //   }
    // }

    .ant-form-item-control-input {
      min-height: 26px;
    }

    .ant-input {
      // font-size: 12px;
      border-radius: 5px;
    }

    .ant-input-password {
      border-radius: 5px;
    }

    // .ant-btn {
    //   height: 29px;
    // }
  }

  .top {
    display: flex;
    margin-bottom: 75px;
    // margin-top: 75px;

    .logo {
      position: relative;
      width: 547px;
      // margin-right: 41px;
      padding-top: 29.6%;

      img {
        position: absolute;
        top: 0;
        width: 100%;
      }
    }

    // .right {
    //   flex: 1;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: center;
    // }

    // .logoText {
    //   height: 38px;
    // }

    // .des {
    //   font-size: 22px;
    //   letter-spacing: 1px;
    //   line-height: 44px;
    // }
  }

  a {
    color: #fff;
    font-size: 12px;

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
    font-size: 12px;
  }

  .ant-checkbox-inner {
    border-radius: 38px;
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
    // width: 12px;
    // height: 12px;
    border-color: @primary-color;
    background-color: @primary-color;
  }
}

@media (max-width: 600px) {
  .LoginView {
    .top {
      margin-bottom: 10%;
      margin-top: 10%;

      .logo {
        width: 100%;
        margin: 0 auto;
        // margin-right: 41px;
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
