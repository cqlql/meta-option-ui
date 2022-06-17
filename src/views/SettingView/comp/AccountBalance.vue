<script lang="ts" setup>
import AvatarUser from '@/components/AvatarUser.vue'
import BalanceList from './BalanceList.vue'
import Icon from '@/components/Icon/src/Icon.vue'
import { inject } from 'vue'
import { TabVal } from '../types'
const tabVal = inject<TabVal>('tabVal')
</script>
<template>
  <div class="AccountBalance">
    <AvatarUser
      src="https://img13.360buyimg.com/n5/jfs/t1/163526/38/27104/149048/616a7d2cE926d0a2c/1835b9f54cf90589.jpg"
      >User1</AvatarUser
    >

    <BalanceList class="mt-8"></BalanceList>
    <div class="text">
      <span>Today get</span>
      <em>20,000</em>
    </div>

    <div class="btn">
      <a-button @click="tabVal = 'BankCard'" block>
        <Icon icon="ant-design:plus-circle-outlined"></Icon>
        <span>ADD YOUR BANK CARD</span>
      </a-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.AccountBalance {
  background-color: #263042;
  box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  border: solid 1px #333d51;
  padding: 38px;

  & > .text {
    line-height: 45px;

    span {
      vertical-align: middle;
      color: #a2a9bb;
    }

    em {
      margin-left: 20px;
      color: #7cc623;
      font-size: 18px;
      letter-spacing: 0;
      font-style: normal;
      vertical-align: middle;
    }
  }

  & > .btn .ant-btn {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    height: 45px;
    color: #183200;
    background-image: linear-gradient(
      184deg,
      #7ecf2a 0%,
      #60ae1a 50%,
      #357f01 100%
    );
    border: none;
    font-size: 18px;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      opacity: 1;
    }

    .app-iconify {
      // display: block;
      font-size: 23px;
    }

    & > span {
      vertical-align: middle;
    }
  }
}
</style>
