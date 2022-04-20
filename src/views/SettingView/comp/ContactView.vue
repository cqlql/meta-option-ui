<script lang="ts" setup>
import ContactItem from './ContactItem.vue'
</script>
<template>
  <div class="ContactView">
    <div class="left enter-y">
      <ContactItem>
        <template #title>Contact me on telegram</template>
        <template #number>(+00) 123 456 789</template>
        <img src="@/assets/contact/Telegram.png" />
        <template #btn>
          <a-button
            type="primary"
            style="background: #46aefc; border-color: #46aefc"
            >Go</a-button
          >
        </template>
      </ContactItem>
      <ContactItem>
        <template #title>Contact me on WhatsApp</template>
        <template #number>(+00) 123 456 789</template>
        <img src="@/assets/contact/WhatsApp.png" />
        <template #btn>
          <a-button
            type="primary"
            style="background: #0dc143; border-color: #0dc143"
            >Go</a-button
          >
        </template>
      </ContactItem>
      <ContactItem>
        <template #title>Contact me on telegram</template>
        <template #number>@YourUserName</template>
        <img src="@/assets/contact/Facebook.png" />
        <template #btn>
          <a-button
            type="primary"
            style="background: #4167b2; border-color: #4167b2"
            >Go</a-button
          >
        </template>
      </ContactItem>
    </div>
    <div class="right enter-y">
      <div class="phone">
        <div class="img">
          <img src="@/assets/contact/service.png" />
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
  align-items: center;
  justify-content: center;
  min-width: 1030px;

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
    padding-top: 32px;
    // padding-bottom: 48px;
    text-align: center;

    img {
      width: 98px;
      height: 80px;
      margin: 0 auto;
    }

    .title {
      line-height: 48px;
      font-size: 18px;
    }

    .number {
      line-height: 1;
    }
  }
}
</style>
