<script lang="ts" setup>
import CheckboxPlus from '@/components/CheckboxPlus/CheckboxPlus.vue'
import { ref } from 'vue'
const selectedIndex = ref(0)
</script>
<template>
  <div class="TermsAndConditions mt-12 enter-y">
    <div class="nav">
      <CheckboxPlus
        v-model="selectedIndex"
        :list="['Staking User Agreement', 'Terms of Service', 'Disclaimer']"
      >
        <template #default="{ item }">{{ item }}</template>
      </CheckboxPlus>
    </div>

    <div class="text-list">
      <div class="text">
        <h3>1. Summary</h3>
        1.1 The Staking Service (“The Service”) is offered by Paragon Option Co.
        Ltd. (“Paragon Option”) that allows one obtain yield by staking digital
        assets. Paragon Option is responsible for the product design management
        and the operation of staking storage of the Service. In order to use the
        Service, you should read and abide by the Staking User Agreement ("This
        Agreement"). Please be sure to read carefully, fully understand the
        terms and conditions, and choose to accept or not accept this agreement
      </div>
      <div class="text">
        1.2 Unless you have read and accepted all the terms of this Agreement,
        you are not authorized to use the Staking and its corresponding
        Services. Your acceptance of this Agreement and your use of the Service
        represents that you have read and agreed to this Agreement and that this
        Agreement is legally binding on you.
      </div>
      <div class="text">
        <h3>2. Explanation of Terms</h3>
        • T Day: A nature day based on Hong Kong time (UTC+8). • Staking: The
        User will stake a certain amount of an agreed digital asset in the PO
        Pool. After staking, the User will not be able to trade the staked
        digital asset in the Mining Account. • Redemption: The redemption of the
        staked digital asset takes T+n days to deliver to transfer to the
        MiningAccount. • Transfer-in: The User transfers a certain amount of a
        digital asset to a Paragon Option account, such as theFunding Account,
        to the User’s Mining Account. • Transfer-out: The User transfers a
        certain amount of a digital asset from the Mining Account to the User’s
        Paragon Option account, such as the Funding Account. • Staking Period:
        The time period for the User to stake the digital asset. If you stake
        your digital asset on T day (HKT) and redeem it between 0:00 to 24:00 on
        T+n day, your staking period is n-1 days. If you choose a fixed staking
        period, it is agreed that after the staking period expires, the User can
        redeem the staked digital asset into the User’s Mining Account. If the
        staking period is flexible, the User can redeem the staked digital asset
        at any time to the User’s Mining Account.
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.TermsAndConditions {
  display: flex;

  .nav {
    width: 265px;

    .checkbox-plus {
      flex-direction: column;
    }

    ::v-deep(.item) {
      + .item {
        margin-top: 20px;
      }
    }
  }

  .text-list {
    flex: 1;
    margin-left: 60px;

    .text {
      padding-bottom: 20px;
      color: #ffffffb5;
    }

    h3 {
      line-height: 26px;
      margin: 0;
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>
