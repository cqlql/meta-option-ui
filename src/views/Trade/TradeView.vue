<script lang="ts" setup>
import { ref } from 'vue'
import { Select as ASelect } from 'ant-design-vue'
import IconFont from '@/components/IconFont/IconFont.vue'
import InputNumber from './comp/InputNumber.vue'
import Icon from '@/components/Icon/src/Icon.vue'
import DownUpBar from './comp/DownUpBar.vue'
import ChartTypeDialog from './comp/ChartTypeDialog.vue'
import IndicatorsSettingDialog from './comp/IndicatorsSettingDialog.vue'

const assetValue = ref('EUR/USD')
const amount = ref('0')
const strike = ref('1')
const options = [
  {
    value: 'EUR/USD',
  },
  {
    value: 'EUR/GBP',
  },
]
const chartTypeDialogVisible = ref(false)
const indicatorsSettingDialogVisible = ref(false)
function chartTypeSelect() {
  chartTypeDialogVisible.value = true
}
function indicatorsSelect() {
  indicatorsSettingDialogVisible.value = true
}
</script>
<template>
  <div class="TradeView">
    <div class="chart-settings">
      <div class="cell">
        <a-select
          v-model:value="assetValue"
          style="width: 200px"
          :options="options"
        ></a-select>
      </div>
      <div class="cell" @mousedown.prevent @click="chartTypeSelect">
        <IconFont name="chart-area"></IconFont>
      </div>
      <div class="cell" @mousedown.prevent @click="indicatorsSelect">
        <IconFont name="chart-k-bar"></IconFont>
      </div>
    </div>

    <div v-if="'s2' in $route.query" class="deal-info">
      <div class="item">
        <div class="label"> Estimate profit </div>
        <div class="value green">91.50</div>
      </div>
      <div class="item">
        <div class="label"> Expiration time </div>
        <div class="value"> 00:18 </div>
      </div>
    </div>
    <div v-else class="deal-controller">
      <div class="left">
        <div class="row-top">
          <div class="item">
            <div class="title">Amount</div>
            <div class="ipt">
              <InputNumber v-model="amount"> </InputNumber>
            </div>
          </div>
          <div class="item">
            <div class="title">Strike rate</div>
            <div class="ipt">
              <DownUpBar v-model="strike" noInput> </DownUpBar>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="btn">
            <div><button class="active">60s</button></div>
            <div class="text">Profit 80%</div>
          </div>
          <div class="btn">
            <div><button>60s</button></div>
            <div class="text">Profit 80%</div>
          </div>
          <div class="btn">
            <div><button>60s</button></div>
            <div class="text">Profit 80%</div>
          </div>
          <div class="btn">
            <div><button>60s</button></div>
            <div class="text">Profit 80%</div>
          </div>
          <div class="btn">
            <div><button>60s</button></div>
            <div class="text">Profit 80%</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="item">
          <div class="title">$91.50</div>
          <div class="btn">
            <button
              ><Icon icon="ic:baseline-keyboard-arrow-down"></Icon>
              <span>DOWN</span>
              <span class="info">95%</span>
            </button>
          </div>
        </div>
        <div class="item">
          <div class="title">$91.50</div>
          <div class="btn">
            <button class="up"
              ><Icon icon="ic:baseline-keyboard-arrow-up"></Icon>
              <span>UP</span>
              <span class="info">95%</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <ChartTypeDialog v-model:visible="chartTypeDialogVisible"></ChartTypeDialog>
    <IndicatorsSettingDialog
      v-model:visible="indicatorsSettingDialogVisible"
    ></IndicatorsSettingDialog>
  </div>
</template>

<style lang="less" scoped>
.TradeView {
  .chart-settings {
    position: absolute;
    left: 20px;
    top: 20px;
    display: flex;
    height: 45px;
    border: 1px solid #3a4357;
    border-radius: @border-radius-base;

    .cell {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      // text-align: center;
      border-left: 1px solid #3a4357;
      cursor: pointer;
      color: #3099f5;

      &:first-child {
        width: auto;
        border-left: none;
      }

      &:hover {
        background-color: #2b3345;
      }
    }

    ::v-deep(.ant-select-selector) {
      height: 43px;
      border: none;

      &:hover {
        background-color: #2b3345;
      }

      .ant-select-selection-item {
        line-height: 43px;
      }
    }
  }

  .deal-controller {
    position: absolute;
    left: 50%;
    bottom: 30px;
    z-index: 10;
    display: flex;
    width: 740px;
    // height: 80px;
    padding: 6px 15px;
    margin-left: -(740px / 2);
    border-radius: 5px;
    background-color: rgba(28, 35, 51, 0.6);
    box-sizing: border-box;
    transition: width 0.2s, margin 0.2s;
    gap: 15px;

    & > .left {
      flex: 2;

      .btn {
        // display: inline-block;
        // padding: 6px 10px;
      }

      .row {
        display: flex;
        padding-top: 6px;
        gap: 10px;
      }

      .row-top {
        display: flex;
        gap: 15px;
      }

      .item {
        flex: 1;
      }

      button {
        border-radius: 4px;
        border: solid 1px #424b60;
        height: 27px;
        padding: 0 15px;

        &:hover {
          border-color: #389bf2;
        }

        &.active {
          border-color: #389bf2;
          background-color: #389bf2;
        }
      }

      .text {
        font-size: 12px;
      }
    }

    & > .right {
      flex: 1;
      display: flex;
      gap: 12px;

      .item {
        flex: 1;

        // &:first-child {
        //   padding-right: 6px;
        // }

        &:last-child {
          .info {
            left: 0;
            right: auto;
            border-radius: 0 4px 0 4px;
          }
        }
      }

      // .btn {
      //   position: relative;
      // }

      .info {
        position: absolute;
        right: 0;
        bottom: 0;
        line-height: 15px;
        padding: 0 8px;
        color: #fff;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 4px 0 4px 0;
      }

      button {
        position: relative;
        width: 126px;
        height: 78px;
        color: rgba(0, 0, 0, 0.3);
        font-size: 18px;
        background-image: linear-gradient(-180deg, #d4225d, #d42260);
        font-weight: bold;
        border-radius: 4px;
        transition: transform 0.2s, opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }

        &:active {
          transform: translateY(1px);
        }

        span {
          vertical-align: middle;
        }

        .app-iconify {
          font-size: 42px;
          margin-left: -16px;
        }
      }

      .up {
        background-image: linear-gradient(-180deg, #8cc44f, #4ed462);
      }
    }

    .title {
      color: #424b60;
    }
  }

  .deal-info {
    position: absolute;
    left: 50%;
    bottom: 30px;
    z-index: 10;
    display: flex;
    padding: 25px 40px 20px;
    transform: translateX(-50%);
    border-radius: 5px;
    background-color: rgba(28, 35, 51, 0.6);
    box-sizing: border-box;
    transition: width 0.2s, margin 0.2s;
    gap: 50px;

    .label {
      line-height: 1;
      color: #949eb9;
      font-size: 18px;
    }

    .value {
      color: #fff;
      font-size: 27px;
    }

    .green {
      color: #04af58;
    }
  }
}
</style>
