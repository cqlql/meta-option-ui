<script lang="ts" setup>
const list = [
  {
    name: 'INR',
    value: '744315.00',
  },
  { name: 'JPY', value: '' },
  { name: 'GBP', value: '' },
  { name: 'AUD', value: '' },
  { name: 'EUR', value: '' },
]
</script>
<template>
  <div class="EnterAmout">
    <div class="EnterAmout_header">
      <div class="row">
        <div>Min.100 </div>
        <div class="tilde"></div>
        <div>$ USD</div>
      </div>
    </div>
    <div class="row-list">
      <div v-for="item of list" :key="item.name" class="row">
        <div>{{ item.value }}</div>
        <div class="tilde">~</div>
        <div> {{ item.name }} </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.EnterAmout {
  padding: 20px 30px;
  font-size: 18px;
  text-align: center;
  background-color: #263042;
  box-shadow: 0 10px 58px 0 rgba(0, 0, 0, 0.24);
  border-radius: @border-radius-base;
  border: solid 2px #333d51;

  .row {
    display: flex;
    line-height: 60px;

    & > div {
      padding: 0 20px;
    }

    & > div:first-child {
      flex: 1;
    }

    & > div:last-child {
      width: 140px;
    }

    .tilde {
      width: 0;
      padding: 0;
      // padding-right: 20px;
    }
  }
}

.EnterAmout_header {
  font-size: 24px;

  .row {
    border: solid 2px #333d51;
    border-radius: 3px;

    & > div:first-child {
      border-right: solid 2px #333d51;
    }
  }
}
</style>
