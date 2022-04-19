<script lang="ts" setup>
import TitleItem from '@/views/Finance/comp/TitleItem.vue'
import AccountBalance from './AccountBalance.vue'
import CheckboxPlus from '@/components/CheckboxPlus/CheckboxPlus.vue'
import Icon from '@/components/Icon/src/Icon.vue'
</script>
<template>
  <div class="MyAccount flex">
    <div class="flex-1 enter-y">
      <TitleItem title="Account Balance">
        <AccountBalance />
      </TitleItem>
    </div>
    <div class="flex-[1.2] ml-20 enter-y">
      <TitleItem title="Verification">
        <div class="Verification">
          <div class="text"> By completing verification, you </div>
          <ul class="text-list">
            <li> Pay with UPI </li>
            <li> Trade on Market </li>
          </ul>

          <CheckboxPlus
            cancellable
            :list="[{ name: '1' }, { name: '2' }]"
            class="Checkbox"
          >
            <template #1>
              <div class="Checkbox_item">
                <div class="img">
                  <Icon icon="mdi:card-account-details-outline"></Icon>
                </div>
                <div class="text">
                  <div class="label">Photo ID</div>
                  <div class="value">
                    Passport, National ID, or Driver’s license.
                  </div>
                </div>
              </div>
            </template>
            <template #2>
              <div class="Checkbox_item">
                <div class="img">
                  <Icon icon="ri:user-3-fill"></Icon>
                </div>
                <div class="text">
                  <div class="label">Selfie</div>
                  <div class="value">
                    The photo ID and your face must be cleary visible without
                    cropping
                  </div>
                </div>
              </div>
            </template>
          </CheckboxPlus>

          <div class="text-right mt-10">
            <a-button type="primary" class="big !px-20">Upload</a-button>
          </div>
        </div>
      </TitleItem>
    </div>
  </div>
</template>

<style lang="less" scoped>
.MyAccount {
  .Verification {
    margin-top: -16px;

    & > .text {
    }

    & > .text-list {
      margin-bottom: -6px;

      li::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #389bf2;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 #389bf2;
        margin-right: 20px;
      }
    }

    .Checkbox {
      // display: grid;
      // grid-template-columns: 1fr 1fr;
      // grid-row-gap: 20px;
      // grid-column-gap: 20px;
      display: block;

      & > ::v-deep(.item) {
        padding: 20px;
        margin-top: 32px;
      }

      // & > ::v-deep(.item + .item) {
      //   margin-top: 32px;
      // }
    }

    .Checkbox_item {
      display: flex;
      color: #fff;
      font-size: 18px;

      .img {
        font-size: 50px;
      }

      .text {
        margin-left: 30px;
      }

      .label {
        line-height: 46px;
        font-size: 24px;
      }
    }
  }
}
</style>
