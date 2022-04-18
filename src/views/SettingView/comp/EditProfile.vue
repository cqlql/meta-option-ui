<script lang="ts" setup>
import TitleItem from '@/views/Finance/comp/TitleItem.vue'
import AccountBalance from './AccountBalance.vue'
import CheckboxPlus from '@/components/CheckboxPlus/CheckboxPlus.vue'
import Icon from '@/components/Icon/src/Icon.vue'
import AvatarVue from '@/components/AvatarVue.vue'
import PersonalInfo from './PersonalInfo.vue'
</script>
<template>
  <div>
    <div class="MyAccount flex mt-5 enter-y">
      <div class="flex-1">
        <TitleItem title="Profile">
          <div class="UserInfoCard">
            <div class="main-cont">
              <div class="left">
                <AvatarVue
                  src="https://img13.360buyimg.com/n5/jfs/t1/163526/38/27104/149048/616a7d2cE926d0a2c/1835b9f54cf90589.jpg"
                ></AvatarVue>
              </div>

              <div class="right">
                <div class="name">User Name</div>
                <div class="info">Your ID: 168168 </div>
              </div>
            </div>

            <div class="setBtn text-right">
              <a-button type="link">
                <Icon icon="ic:outline-add-a-photo"></Icon> Set New
                Photo</a-button
              >
            </div>
          </div>
        </TitleItem>
        <TitleItem class="mt-5" title="Personal info">
          <PersonalInfo></PersonalInfo>
        </TitleItem>
      </div>
      <div class="flex-[1.2] ml-20">
        <TitleItem title="Address"> 1 </TitleItem>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.MyAccount {
  .UserInfoCard {
    // background-color: #263042;
    box-shadow: 0 10px 58px 0 rgba(0, 0, 0, 0.24);
    border-radius: @border-radius-base;
    border: solid 2px #333d51;
    padding: 26px 0 4px 46px;

    .main-cont {
      display: flex;
    }

    .left {
    }

    .right {
      flex: 1;
      margin-left: 26px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .name {
      line-height: 1;
      font-size: 24px;
      padding-bottom: 6px;
    }

    .info {
      color: #75859c;
      font-size: 14px;
    }

    .setBtn {
      margin-top: -10px;
    }
  }
}
</style>
