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

    <!-- <CheckboxImage label="Bank Account">
      <img src="@/assets/bank.png" />
    </CheckboxImage> -->
  </div>
</template>

<style lang="less" scoped>
.CheckboxPlusDemo_item {
  color: #fff;
}
</style>
