<script lang="ts" setup>
import CheckboxPlus from './CheckboxPlus.vue'

const list = [
  {
    value: 1,
  },
  {
    value: 2,
  },
]
const listImage = [
  {
    name: 'bank',
    label: 'Bank Account',
  },
  {
    name: 'USDT',
    label: 'USDT Account',
  },
]
</script>
<template>
  <div>
    <CheckboxPlus class="lime" :list="list">
      <template #default="{}">
        <div class="CheckboxPlusDemo_item">
          <div>100,000</div>
          <div>+20% Bonus</div>
        </div>
      </template>
    </CheckboxPlus>

    <CheckboxPlus :list="list" no-tick>
      <template #default="{}">
        <div class="CheckboxPlusDemo_item">
          <div>100,000</div>
          <div>+20% Bonus</div>
        </div>
      </template>
    </CheckboxPlus>
    <CheckboxPlus :list="listImage">
      <template #bank>
        <div class="CheckboxImage_item">
          <div class="img">
            <img src="@/assets/bank.png" />
          </div>
          <div class="label">+20% Bonus</div>
        </div>
      </template>
      <template #USDT>
        <div class="CheckboxImage_item">
          <div class="img">
            <img src="@/assets/t.png" />
          </div>
          <div class="label">USDT Account</div>
        </div>
      </template>
    </CheckboxPlus>

    <CheckboxPlus :list="listImage">
      <template #bank>
        <div class="CheckboxPayment_item">
          <div class="img">
            <img src="@/assets/bank-card.png" />
          </div>
          <div class="label">Bank Card</div>
        </div>
      </template>
      <template #USDT>
        <div class="CheckboxPayment_item">
          <div class="img">
            <img src="@/assets/upi.png" />
          </div>
          <div class="label">UPI pay</div>
        </div>
      </template>
    </CheckboxPlus>

    <!-- <CheckboxImage label="Bank Account">
      <img src="@/assets/bank.png" />
    </CheckboxImage> -->
  </div>
</template>

<style lang="less" scoped>
.CheckboxPlusDemo_item {
  color: #fff;
}

.CheckboxImage_item {
  display: flex;
  color: #fff;
  font-size: 18px;

  & > .label {
    line-height: 46px;
    margin-left: 30px;
  }
}

.CheckboxPayment_item {
  padding: 10px 0;
  text-align: center;

  & > .label {
    line-height: 1;
    color: #a2a9bb;
    font-size: 14px;
    padding-top: 18px;
  }
}
</style>
