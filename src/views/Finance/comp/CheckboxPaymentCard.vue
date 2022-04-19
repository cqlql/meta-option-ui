<script lang="ts" setup>
import CheckboxPlus from '@/components/CheckboxPlus/CheckboxPlus.vue'
</script>
<template>
  <CheckboxPlus :list="[{ name: 'card' }, { name: 'upi' }]">
    <template #card>
      <div class="CheckboxPayment_item">
        <div class="img">
          <img src="@/assets/bank-card.png" />
        </div>
        <div class="label">Bank Card</div>
      </div>
    </template>
    <template #upi>
      <div class="CheckboxPayment_item">
        <div class="img">
          <img src="@/assets/upi.png" />
        </div>
        <div class="label">UPI pay</div>
      </div>
    </template>
  </CheckboxPlus>
</template>

<style lang="less" scoped>
.CheckboxPayment_item {
  padding: 8px 0;
  text-align: center;

  & > .label {
    line-height: 1;
    color: #a2a9bb;
    font-size: 11px;
    padding-top: 14px;
  }
}
</style>
