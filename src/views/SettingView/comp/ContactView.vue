<script lang="ts" setup>
import ContactItem from './ContactItem.vue'
</script>
<template>
  <div class="ContactView">
    <div class="left">
      <ContactItem></ContactItem>
      <ContactItem></ContactItem>
      <ContactItem></ContactItem>
    </div>
    <div class="right">
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

  .left {
  }

  .right {
  }

  .phone {
    background-color: #22293f;
    box-shadow: 0 10px 58px 0 rgba(0, 0, 0, 0.24);
    border-radius: 6px;
    border: solid 2px #424b60;
  }
}
</style>
