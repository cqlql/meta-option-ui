<script lang="ts" setup></script>
<template>
  <div class="QuestionText">
    <div class="text">
      Withdrawal is available only to card you used for deposit and only in the
      amount of the deposit made via this card. Other funds you can withdraw
      using other methods.
    </div>
    <h3>How can I withdraw money?</h3>
    <div class="text">
      Please make sure your account has been verified, then to withdraw money
      please create a withdrawal request. You can withdrawal any amount from
      your balance to your bank card,.
    </div>

    <h3>How long withdrawal requests are processed?</h3>
    <div class="text">Withdrawal requests are processed in one workday.</div>

    <h3> Is there any withdrawal fee? </h3>
    <div class="text">
      We don't take any fees. The commission may be charged by a payment system
      for the processing of transactions.
    </div>
    <h3> What is minimum amount for withdrawal? </h3>
    <div class="text"> Minimum withdrawal amount is ₹1,000 </div>
    <h3> Which payment methods are available for withdrawal? </h3>
    <div class="text">
      First withdrawals have to be made to bank card or or UPI Pay which was
      used for making a deposit. In case of withdrawal to bank card amount of
      withdrawal has to be equal to deposit amount.
    </div>
  </div>
</template>

<style lang="less" scoped>
.QuestionText {
  color: #fff;

  & > h3 {
    line-height: 1.2;
    color: #fff;
    font-size: 18px;
    margin-bottom: 4px;
  }

  & > .text {
    font-size: 14px;
    margin-bottom: 23px;
  }
}
</style>
