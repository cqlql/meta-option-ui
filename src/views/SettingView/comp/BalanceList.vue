<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
import { ref } from 'vue'

const expanded = ref(false)
</script>
<template>
  <div class="BalanceList">
    <div class="labelValue">
      <div class="label" @click="expanded = !expanded">
        <div class="flex items-center justify-center h-[100%]">
          <i class="arrow" :class="{ expanded }"></i>
          <!-- <i class="arrow expanded"></i> -->

          <Icon
            class="align-middle !text-5xl"
            icon="ri:money-dollar-circle-fill"
          ></Icon>

          <span class="align-middle leading-[24px] ml-2">Balance</span>
        </div>
      </div>
      <div class="value">10,000.00</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.BalanceList {
  .labelValue {
    display: flex;
    height: 87px;
    background-color: #263042;
    border-radius: 0 @border-radius-base @border-radius-base 0;
    border: solid 2px #333d51;
    font-size: 24px;

    .arrow {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 10px 0 10px;
      border-color: #fff transparent transparent transparent;
      transition: transform 0.2s;
      margin-top: 5px;
      margin-right: 20px;
    }

    .arrow.expanded {
      // border-width: 0 10px 10px 10px;
      // border-color: transparent transparent #fff transparent;
      transform: rotate(180deg);
    }

    .label {
      flex: 1;
      background-color: #21293a;
      color: #75859c;
      border-right: solid 2px #333d51;
    }

    .value {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
    }
  }
}
</style>
