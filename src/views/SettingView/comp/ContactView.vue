<script lang="ts" setup>
import ContactItem from './ContactItem.vue'
</script>
<template>
  <div class="ContactView">
    <div class="left enter-y">
      <ContactItem></ContactItem>
      <ContactItem></ContactItem>
      <ContactItem></ContactItem>
    </div>
    <div class="right enter-y">
      <div class="phone">
        <div class="img">
          <img src="" alt="" />
        </div>
        <div class="title"> Phone Number </div>
        <div class="number">(+00) 123 456 789 / (+00) 234 999 888</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ContactView {
  display: flex;

  .ContactItem + .ContactItem {
    margin-top: 20px;
  }

  .left {
    padding-right: 30px;
  }

  .right {
    padding-left: 30px;
  }

  .phone {
    background-color: #22293f;
    box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    border: solid 1px #424b60;
    width: 340px;
    height: 222px;
  }
}
</style>
