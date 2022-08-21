<script lang="ts" setup>
import CardBox from './CardBox.vue'
import Icon from '@/components/Icon/src/Icon.vue'
</script>
<template>
  <CardBox class="DescriptionBox" title="Description">
    <p>
      Just pure, insstinct basedtrading strategy. Here for the long run. Wait
      for setup, invest long, and avoid shorts. Profit will fluctuate. Be
      prepared and put your STOP LOSS. Invest at your risk! Let’s ride this bull
      market for as long as we can before the next one.
    </p>

    <p> Manager’s social link: </p>

    <div class="DescriptionBox-footer">
      <Icon icon="bxl:telegram"></Icon>
      <Icon icon="ant-design:wechat-outlined"></Icon>
    </div>
  </CardBox>
</template>

<style lang="less" scoped>
.DescriptionBox-footer {
  color: #009aff;
  font-size: 20px;
  margin-top: -8px;
  margin-bottom: -4px;

  .app-iconify:last-child {
    margin-left: 10px;
  }
}
</style>
