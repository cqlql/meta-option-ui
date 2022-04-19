<script lang="ts" setup>
import CheckboxPlus from '@/components/CheckboxPlus/CheckboxPlus.vue'
import Icon from '@/components/Icon/src/Icon.vue'
import LabelInput from '@/components/LabelInput.vue'
import TitleItem from './TitleItem.vue'
import LayoutView from './LayoutView.vue'

const amountList = [
  {
    value: '1,000,000',
    info: '+1,000,000',
    type: 'gold',
  },
  {
    value: '800,000',
    info: '+30% Bonus',
    type: 'cyan',
  },
  {
    value: '250,000',
    info: '+30% Bonus',
    type: 'green',
  },
  {
    value: '250,000',
    info: '+30% Bonus',
    type: 'white',
  },
]
</script>
<template>
  <LayoutView class="DepositView">
    <template #left>
      <div class="left">
        <TitleItem title="Choose payment system">
          <CheckboxPlus :list="[{ name: 'bank' }, { name: 'USDT' }]">
            <template #bank>
              <div class="CheckboxPayment_item">
                <div class="img">
                  <img src="@/assets/bank-card.png" />
                </div>
                <div class="label">Bank Card</div>
              </div>
            </template>
            <template #USDT>
              <div class="CheckboxPayment_item">
                <div class="img">
                  <img src="@/assets/upi.png" />
                </div>
                <div class="label">UPI pay</div>
              </div>
            </template>
          </CheckboxPlus>
        </TitleItem>
        <TitleItem class="mt-8" title="Calculator">
          <LabelInput title="$ USD" value="100,000"></LabelInput>
          <div class="row-list">
            <table>
              <colgroup>
                <col class="col1" />
                <col class="col2" />
                <col class="col3" />
              </colgroup>
              <tr v-for="v of 5" :key="v">
                <td>INR</td>
                <td>~</td>
                <td>744315.00</td>
              </tr>
            </table>
          </div>
        </TitleItem>
      </div>
    </template>
    <template #right>
      <TitleItem class="right" title="Enter amount">
        <template #titleRight>
          <a-checkbox>Bonus</a-checkbox>
        </template>
        <CheckboxPlus class="lime" :list="amountList">
          <template #default="{ item: { value, info, type } }">
            <div class="CheckboxType">
              <div :class="type">
                {{ value }}
              </div>
              <div v-if="info" class="info">{{ info }}</div>
            </div>
          </template>
        </CheckboxPlus>

        <LabelInput title="$ USD" value="100,000"></LabelInput>

        <div class="one-data">
          <table>
            <thead>
              <tr>
                <th>
                  <span> You pay </span>
                </th>
                <th>
                  <span> Bonus </span>
                  <Icon
                    class="!text-sky-400 !text-2xl"
                    icon="ant-design:info-circle-outlined"
                  ></Icon>
                </th>
                <th>
                  <span> You get </span>
                  <span class="text-green-500">(20% Bonus)</span></th
                >
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100,000</td>
                <td>20%</td>
                <td>120,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <a-button block type="primary2">CONTINUE</a-button>
      </TitleItem>
    </template>
  </LayoutView>
</template>

<style lang="less" scoped>
.DepositView {
  .left {
    .checkbox-plus > ::v-deep(.item:first-child) {
      margin-right: 15px;
    }
  }

  .right {
    .checkbox-plus {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 15px;
      grid-column-gap: 15px;
    }

    .LabelInput {
      margin-top: 23px;
    }
  }

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

  .row-list {
    padding: 8px 0;
    color: #fff;
    font-size: 14px;
    text-align: center;
    border-radius: @border-radius-base;
    border: solid 2px #333d51;
    margin-top: 15px;

    table {
      table-layout: fixed;
      width: 100%;
    }

    td {
      padding: 8px 0;
    }

    .col3 {
      // min-width: 113px;
    }
  }

  .CheckboxType {
    color: #fff;
    font-size: 18px;
    text-align: center;

    .gold {
      color: #fed262;
    }

    .cyan {
      color: #96ffff;
    }

    .green {
      color: #a1efb7;
    }

    .info {
      color: #a2a9bb;
      font-size: 14px;
    }
  }

  .one-data {
    padding: 23px 0 30px;
    color: #fff;
    font-size: 18px;

    table {
      table-layout: fixed;
      width: 100%;
    }

    th {
      color: #a2a9bb;
      font-size: 14px;
      text-align: left;

      span {
        line-height: 1 !important;
        vertical-align: middle;
      }
    }
  }

  .ant-btn-primary2 {
    height: 59px;
    font-size: 23px;
  }
}
</style>
