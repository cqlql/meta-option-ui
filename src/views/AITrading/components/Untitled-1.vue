<template>
  <view class="sign__page">
    <view class="sign__box">
      <view class="sign__title"> 用户登录 </view>
      <u--input
        type="text"
        :placeholder="signData.accountMsg"
        border="surround"
        :placeholderStyle="signData.accountColor"
        v-model="signData.username"
        customStyle="background-color:#fff"
      >
      </u--input>
      <view class="margin-box"></view>
      <u--input
        type="password"
        :placeholder="signData.passwordMsg"
        :placeholderStyle="signData.passwordColor"
        border="surround"
        v-model="signData.password"
        customStyle="background-color:#fff"
      >
      </u--input>
      <view class="margin-box"></view>
      <u-button color="#b3a5ff" @click="submit()">立即登录</u-button>
      <view
        style="color: #47a9ff; float: right; margin-top: 5px"
        @click="goPage('/pages/my/signup')"
        >没有账号？</view
      >
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      signData: {
        accountMsg: '账号',
        passwordMsg: '密码',
        accountColor: 'color:rgb(192, 196, 204)',
        passwordColor: 'color:rgb(192, 196, 204)',
        username: '',
        password: '',
      },
    }
  },
  methods: {
    goPage(e) {
      uni.navigateTo({
        url: e,
        success: (res) => {
          console.log('进入注册页面')
        },
      })
    },
    submit() {
      let reg = /^[0-9]{11}$/
      let account = this.signData.username
      if (reg.test(account)) {
        return
      }
      verify(
        {
          name: '',
        },
        {
          name: [
            {
              test: (v) => reg.test(v),
              message: 'error',
            },
            {
              test: (v) => v.length !== 0,
              message: 'error',
            },
          ],
        },
      )
    },
  },
  mounted() {
    // var backbutton = document.getElementsByClassName('uni-page-head-hd')[0]
    // if (backbutton) backbutton.style.display = 'none';
  },
}
</script>

<style lang="scss">
.margin-box {
  height: 10px;
}

page {
  background-color: #fff;
}

.sign__title {
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
}

.sign__box {
  width: 70%;
}
</style>
