<script lang="ts" setup>
import CheckboxPlus from '@/components/CheckboxPlus/CheckboxPlus.vue'
import LabelValue from '@/components/LabelValue.vue'
import Icon from '@/components/Icon/src/Icon.vue'

const paymentList = [
  {
    value: 'Bank Card',
  },
  {
    value: 'UPI pay',
  },
]
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
  <div class="DepositView">
    <div class="left enter-y">
      <div class="item">
        <h3>Choose payment system</h3>
        <div class="content">
          <CheckboxPlus :list="paymentList">
            <template #default="{ value }">
              <div>
                <img src="" alt="" />
              </div>
              <div>{{ value }}</div>
            </template>
          </CheckboxPlus>
        </div>
      </div>
      <div class="item">
        <h3>Calculator</h3>
        <div class="content">
          <LabelValue title="$ USD">100,000</LabelValue>
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
        </div>
      </div>
    </div>
    <div class="right enter-y">
      <div class="item">
        <h3>
          <span>Enter amount</span>
          <a-checkbox>Bonus</a-checkbox>
        </h3>
        <div class="content">
          <CheckboxPlus :list="amountList">
            <template #default="{ value, info, type }">
              <div class="CheckboxType">
                <div :class="type">
                  {{ value }}
                </div>
                <div v-if="info" class="info">{{ info }}</div>
              </div>
            </template>
          </CheckboxPlus>

          <LabelValue title="$ USD">100,000</LabelValue>

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
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.DepositView {
  display: flex;
  padding-top: 80px;

  .left,
  .right {
    flex: 1;
    padding: 10px 10px;
  }

  .left {
    .item:first-child {
      margin-bottom: 80px;
    }
  }

  .right {
    .checkbox-plus {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 20px;
      grid-column-gap: 20px;
    }

    .LabelValue {
      margin-top: 30px;
    }
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: 24px;
    margin-bottom: 20px;

    &::v-deep(.ant-checkbox-inner) {
      width: 24px;
      height: 24px;

      &::after {
        width: 7.714286px;
        height: 13.142857px;
      }
    }

    &::v-deep(.ant-checkbox-wrapper) {
      font-size: 24px;
    }
  }

  .row-list {
    padding: 10px 0;
    color: #fff;
    font-size: 18px;
    text-align: center;
    border-radius: 6px;
    border: solid 2px #333d51;
    margin-top: 20px;

    table {
      table-layout: fixed;
      width: 100%;
    }

    td {
      padding: 10px 0;
    }

    .col3 {
      // min-width: 150px;
    }
  }

  .CheckboxType {
    color: #fff;
    font-size: 24px;
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
      font-size: 18px;
    }
  }

  .one-data {
    padding: 30px 0 40px;
    color: #fff;
    font-size: 24px;

    table {
      table-layout: fixed;
      width: 100%;
    }

    th {
      color: #a2a9bb;
      font-size: 18px;
      text-align: left;

      span {
        line-height: 1 !important;
        vertical-align: middle;
      }
    }
  }

  .ant-btn-primary2 {
    height: 78px;
    font-size: 30px;
  }
}
</style>
