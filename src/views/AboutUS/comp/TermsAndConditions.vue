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
        noTick
        :list="['Staking User Agreement', 'Terms of Service', 'Disclaimer']"
      >
        <template #default="{ item }">
          <span>{{ item }}</span>
        </template>
      </CheckboxPlus>
    </div>

    <div v-if="selectedIndex === 0" class="text-list">
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
      <div class="text">
        <h3>3. Eligibility to Use the Service</h3>
        3.1 You understand and confirm: • You have agreed to abide by the
        “Paragon Option Terms of Service” and you are eligible and not to be
        prohibited from using the Services defined therein; • If you are
        registering the Service in your personal capacity, in order to
        effectively accept this Agreement, you must be at least 18 years old,
        with full civil rights and civil capacity, and have all the necessary
        authorities and abilities to sign this Agreement. Once signed, it is
        binding on you; • If you are registering to use the Service on behalf of
        a legal entity, in order to effectively accept this Agreement, you
        declare and guarantee that (i) such legal entity is legally established
        and valid in accordance with applicable laws; (ii) you are duly
        authorized by the legal entity to have the right to act on their behalf.
        • You have the experience and risk tolerance of using the service, and
        have the experience and knowledge to invest in non-guaranteed digital
        currency products • In order to use the Service, you have the ability to
        perform operations on the Internet; • This Agreement does not conflict
        with the laws of your country or region, and you promise that you will
        comply with the laws of your country or region; • You are the legal
        owner of the digital assets in your Mining Account and the Paragon
        Option Funding Account and guarantee that the sources of these digital
        assets are legal. 3.2 You agree and promise: • You will not use the
        Service for any illegal purposes, including but not limited to illegal
        gambling, money laundering, fraud, extortion, extortion, data breaches,
        terrorist financing, and any other violent activities or any businesses
        prohibited by the law. • You will not conduct, initiate or promote any
        forms of market manipulation or other forms of illegal conduct,
        including but not limited to illegal gambling, money laundering, fraud,
        extortion, extortion, data breach, terrorist financing, and any other
        violent activities or businesses prohibited by the law. 3.3 You
        understand and accept the risks that may arise to you and the related
        losses you may suffer from using the Service, including but not limited
        to: • The risks you may suffer from the risks associated to the
        inability to trade the staked digital assets. You are willing to bear
        the funding risks and potential financial losses caused by staking; •
        The expected yield displayed on Paragon Option website is the
        theoretical estimation of yield instead of the actual yield guaranteed
        or promised by Paragon Option. The actual yield may vary from the
        expected yield. Your final yield will be based on the actual yield you
        receive. Paragon Option will deduct the cost, fees, and expenses related
        to the operation of Staking (including but not limited to the server
        fees, electricity fees, etc.) as well as the handling fees for Staking
        from your actual yield of Staking to determine your final yield. Paragon
        Option does not make any guarantee or promise to the actual yield that
        you may receive; • High price fluctuations of digital assets and their
        derivatives may cause significant or total losses in a short period of
        time; • Technical anomalies may occur, which may delay or prevent you
        from using the Service or performing related transactions and result in
        losses of your digital assets; • Market anomalies may occur, which may
        result in losses of your digital assets; • In order to maintain the
        overall health of the market, Paragon Option is required to add, remove,
        or change the policies, the terms of this Agreement or other relevant
        service agreements or terms from time to time. Such behavior may benefit
        or harm individual customers like you.
      </div>
    </div>

    <div v-else-if="selectedIndex === 1" class="text-list">
      <div class="text">
        <h3>2. Summary</h3>
        1.1 The Staking Service (“The Service”) is offered by Paragon Option Co.
        Ltd. (“Paragon Option”) that allows one obtain yield by staking digital
        assets. Paragon Option is responsible for the product design management
        and the operation of staking storage of the Service. In order to use the
        Service, you should read and abide by the Staking User Agreement ("This
        Agreement"). Please be sure to read carefully, fully understand the
        terms and conditions, and choose to accept or not accept this agreement
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
      color: #fff;

      &::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #389bf2;
        border-radius: 8px;
        box-shadow: 0 0 8px 0 #389bf2;
        margin-right: 15px;
        vertical-align: middle;
      }

      + .item {
        margin-top: 20px;
      }
    }

    span {
      vertical-align: middle;
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
