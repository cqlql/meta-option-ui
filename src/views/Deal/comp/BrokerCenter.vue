<script lang="ts" setup>
import CardBox from './CardBox.vue'
import LabelInput from '@/components/LabelInput.vue'
import Icon from '@/components/Icon/src/Icon.vue'
import CardValue from './CardValue.vue'
import MyClientsData from './MyClientsData.vue'
import { reactive } from 'vue'
import MyClientsDataDialog from './MyClientsDataDialog.vue'
import RecordDialog from './RecordDialog.vue'

// import { ref } from 'vue'
// import WithdrawDialog from './WithdrawDialog.vue'

// const withdrawDialogVisible = ref(false)

const clientsDialog = reactive({
  visible: false,
})

const recordDialog = reactive({
  visible: false,
})
</script>
<template>
  <div class="BrokerCenter mt-12 mx-auto flex">
    <div class="enter-y flex-[1.2]">
      <div class="max-w-250">
        <CardBox class="py-8 px-13">
          <LabelInput class="!h-[60px]" value="5,000.00">
            <template #title>
              <div class="flex items-center justify-center h-[100%]">
                <Icon
                  class="align-middle !text-3xl"
                  icon="ri:money-dollar-circle-fill"
                ></Icon>

                <span class="align-middle leading-[18px] ml-2"
                  >Total Commision</span
                >
              </div>
            </template>
          </LabelInput>

          <div class="text-right mt-6">
            <a-button
              class="!px-8"
              type="primary"
              size="large"
              @click="
                $router.push({
                  name: 'Finance',
                  query: { tab: 'WithdrawalView' },
                })
              "
            >
              Withdraw
            </a-button>
          </div>
        </CardBox>

        <div class="summary flex flex-row gap-1">
          <CardValue class="flex-1" title="Referral bonus" value="500,000">
            <template #icon>
              <Icon icon="fluent:people-swap-20-filled"></Icon>
            </template>
          </CardValue>
          <CardValue class="flex-1" title="Extra bonus" value="500,000">
            <template #icon>
              <Icon icon="healthicons:money-bag"></Icon>
            </template>
          </CardValue>
          <CardValue class="flex-1" title="Trade bonus" value="500,000">
            <template #icon>
              <Icon icon="fa6-solid:handshake-angle"></Icon>
            </template>
          </CardValue>
        </div>
        <div class="cell-list">
          <div class="cell noClick">
            <span class="value">My Introducer : Jimmy M</span>
            <!-- <span class="arrows">
              <Icon icon="ic:baseline-arrow-forward-ios"></Icon>
            </span> -->
          </div>
          <!-- <div class="cell">
            <span class="value">Commision Detail</span>
            <span class="arrows">
              <Icon icon="ic:baseline-arrow-forward-ios"></Icon>
            </span>
          </div> -->
          <div class="cell" @click="clientsDialog.visible = true">
            <span class="value">Clients</span>
            <span class="arrows">
              <Icon icon="ic:baseline-arrow-forward-ios"></Icon>
            </span>
          </div>
          <div class="cell" @click="recordDialog.visible = true">
            <span class="value">Clients transaction record</span>
            <span class="arrows">
              <Icon icon="ic:baseline-arrow-forward-ios"></Icon>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="enter-y flex-1 ml-15">
      <MyClientsData />
    </div>
  </div>
  <!-- <WithdrawDialog v-model:visible="withdrawDialogVisible"></WithdrawDialog> -->
  <MyClientsDataDialog
    v-model:visible="clientsDialog.visible"
  ></MyClientsDataDialog>
  <RecordDialog v-model:visible="recordDialog.visible"></RecordDialog>
</template>

<style lang="less" scoped>
.BrokerCenter {
  max-width: 1300px;

  .LabelInput {
    & > ::v-deep(.ipt .ant-input) {
      text-align: center;
    }
  }

  .summary {
    margin: 27px 0;
    gap: 18px;

    .CardValue {
      // flex: 1;
    }
  }

  .cell-list {
    .cell {
      display: flex;
      background-color: #263042;
      box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
      border-radius: 0 @border-radius-base @border-radius-base 0;
      border: solid 1px #333d51;
      padding: 0 15px 0 23px;
      cursor: pointer;

      &:hover {
        color: #389bf2;
      }

      &.noClick {
        color: inherit;
        cursor: default;
      }
    }

    .cell + .cell {
      margin-top: 23px;
    }

    .value {
      line-height: 42px;
      font-size: 18px;
      flex: 1;
    }

    .arrows {
      line-height: 42px;
      color: #389bf2;
    }
  }
}
</style>
