<script lang="ts" setup>
import TitleItem from '@/views/Finance/comp/TitleItem.vue'
import Icon from '@/components/Icon/src/Icon.vue'
import AvatarVue from '@/components/AvatarVue.vue'
import { Select as ASelect } from 'ant-design-vue'
import { reactive } from 'vue'

const ASelectOption = ASelect.Option

const formState = reactive({
  nickname: '',
  day: undefined,
  month: undefined,
  year: undefined,
  phone: '',
  email: '',
  password: '',
  newPassword: '',
  country: '',
  city: '',
  ZIP: '',
  street: '',
})
</script>
<template>
  <div class="MyAccount flex">
    <div class="flex-1 enter-y">
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
      <TitleItem class="mt-8" title="Personal info">
        <div class="PersonalInfo">
          <a-form layout="vertical" :model="formState">
            <a-form-item label="Nickname" :rules="{ required: true }">
              <a-input
                v-model:value="formState.nickname"
                placeholder="input placeholder"
              />
            </a-form-item>
            <a-form-item label="Date of birth">
              <a-row :gutter="12">
                <a-col :span="8">
                  <a-select v-model:value="formState.day" placeholder="Day">
                    <a-select-option value="1">1</a-select-option>
                    <a-select-option value="2">2</a-select-option>
                  </a-select>
                </a-col>
                <a-col :span="8">
                  <a-select v-model:value="formState.month" placeholder="Month">
                    <a-select-option value="1">1</a-select-option>
                    <a-select-option value="2">2</a-select-option>
                  </a-select>
                </a-col>
                <a-col :span="8">
                  <a-select v-model:value="formState.year" placeholder="Year">
                    <a-select-option value="1">1</a-select-option>
                    <a-select-option value="2">2</a-select-option>
                  </a-select>
                </a-col>
              </a-row>
            </a-form-item>
            <a-form-item label="Phone" :rules="{ required: true }">
              <a-input v-model:value="formState.phone" placeholder="" />
            </a-form-item>
            <a-form-item label="Email">
              <a-input v-model:value="formState.email" placeholder="" />
            </a-form-item>
            <a-form-item label="Change Password">
              <a-row :gutter="12">
                <a-col :span="12">
                  <a-input-password
                    v-model:value="formState.password"
                    placeholder="Old password"
                  />
                </a-col>
                <a-col :span="12">
                  <a-input-password
                    v-model:value="formState.newPassword"
                    placeholder="New password"
                  />
                </a-col>
              </a-row>
            </a-form-item>
          </a-form>
        </div>
      </TitleItem>
    </div>
    <div class="flex-[1.2] ml-15 enter-y">
      <TitleItem title="Address">
        <div class="AddressInfo">
          <a-form layout="vertical" :model="formState">
            <a-form-item label="Country">
              <a-input
                v-model:value="formState.country"
                placeholder="Cambodia"
              />
            </a-form-item>

            <a-row :gutter="12">
              <a-col :span="14">
                <a-form-item label="City">
                  <a-input
                    v-model:value="formState.city"
                    placeholder="Cambodia"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="10">
                <a-form-item label="ZIP">
                  <a-input
                    v-model:value="formState.ZIP"
                    placeholder="Cambodia"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item label="Street address">
              <a-input v-model:value="formState.street" placeholder="" />
            </a-form-item>

            <a-form-item class="text-right">
              <a-button type="primary" class="big !px-23">Save</a-button>
            </a-form-item>
          </a-form>
        </div>
      </TitleItem>
    </div>
  </div>
</template>

<style lang="less" scoped>
.MyAccount {
  .UserInfoCard {
    // background-color: #263042;
    box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
    border-radius: @border-radius-base;
    border: solid 1px #333d51;
    padding: 20px 0 3px 35px;

    .main-cont {
      display: flex;
    }

    .left {
    }

    .right {
      flex: 1;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .name {
      line-height: 1;
      font-size: 18px;
      padding-bottom: 5px;
    }

    .info {
      color: #75859c;
      font-size: 12px;
    }

    .setBtn {
      margin-top: -7px;
    }
  }

  ::v-deep(.ant-input) {
    line-height: 23px;
  }

  .ant-form-item {
    margin-bottom: 10px;
  }

  .PersonalInfo {
    // .ant-picker {
    //   width: 100%;
    //   height: 32px;
    // }
  }

  .AddressInfo {
  }
}
</style>
