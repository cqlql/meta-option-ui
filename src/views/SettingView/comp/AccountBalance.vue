<script lang="ts" setup>
import AvatarUser from '@/components/AvatarUser.vue'
import BalanceList from './BalanceList.vue'
</script>
<template>
  <div class="AccountBalance">
    <AvatarUser
      src="https://img13.360buyimg.com/n5/jfs/t1/163526/38/27104/149048/616a7d2cE926d0a2c/1835b9f54cf90589.jpg"
      >User1</AvatarUser
    >

    <BalanceList class="mt-10"></BalanceList>
  </div>
</template>

<style lang="less" scoped>
.AccountBalance {
  background-color: #263042;
  box-shadow: 0 10px 58px 0 rgba(0, 0, 0, 0.24);
  border-radius: 6px;
  border: solid 2px #333d51;
  padding: 50px;
}
</style>
