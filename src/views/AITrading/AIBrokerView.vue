<script lang="ts" setup>
import { Rate as ARate, Table as ATable } from 'ant-design-vue'
import ValueMulti from './components/ValueMulti.vue'
import TextTag from './components/TextTag.vue'
import SvgIcon from '@/components/Icon/src/SvgIcon.vue'
import ValueDes from './components/ValueDes.vue'
import Icon from '@/components/Icon/src/Icon.vue'
import WithdrawDialog from './components/WithdrawDialog.vue'
import { inject, Ref, ref } from 'vue'
import { TabVal } from './types'
import ChartjsLineAreaDemo from '../Demo/comp/ChartjsLineAreaDemo.vue'
import PerformanceLineChart from './components/PerformanceLineChart.vue'

const dataSource = [
  {
    key: 0,
    name: '',
    total: '+57.63%',
    today: '-1%',
    activeDay: '10',
    followerEquity: '1',
  },
]

for (let i = 1; i < 100; i++) {
  dataSource.push({
    key: i,
    name: '',
    total: '+5,797.51%',
    today: '-1.72%',
    activeDay: '20',
    followerEquity: '1',
  })
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    sorter: (a: any, b: any) => a.total - b.total,
  },
  {
    title: 'Today',
    dataIndex: 'today',
  },
  {
    title: 'Active Day',
    dataIndex: 'activeDay',
  },
  {
    title: 'Follower’s equity',
    dataIndex: 'followerEquity',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
  },
  {
    title: 'Performance',
    dataIndex: 'performance',
  },
  { title: '', key: 'action' },
]
const withdrawDialogVisible = ref(false)
function onWithdraw() {
  withdrawDialogVisible.value = true
}
const tabVal = inject('tabVal') as Ref<TabVal>
function toFollowPage() {
  tabVal.value = 'AIBrokerFlowerView'
}
</script>
<template>
  <div>
    <div class="AIBrokerView mt-12 enter-y">
      <div class="operation">
        <div>
          <a-button type="link">Reset</a-button>
        </div>
        <div class="mid">
          <a-button class="active" size="large">
            <template #icon>
              <Icon icon="material-symbols:bookmark-outline"></Icon>
            </template>
          </a-button>
          <a-button size="large">
            <template #icon>
              <Icon icon="majesticons:adjustments"></Icon>
            </template>
          </a-button>
        </div>
        <div>
          <a-button @click="onWithdraw">Withdraw</a-button>
        </div>
      </div>
      <a-table
        :dataSource="dataSource"
        :columns="columns"
        :pagination="{
          total: 85,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'name'">
            <ValueMulti no="1" text="Fx Scalpers">
              <TextTag color="yellow">BTC</TextTag>
              <TextTag color="green">USDT</TextTag>
              <TextTag shape="round">i</TextTag>
              <svg-icon
                name="trading-history"
                style="font-size: 18px"
              ></svg-icon>
            </ValueMulti>
          </template>
          <template v-else-if="column.dataIndex === 'total'">
            <span class="green-color">{{ record.total }}</span>
          </template>
          <template v-else-if="column.dataIndex === 'today'">
            <span class="red-color">{{ record.today }}</span>
          </template>
          <template v-else-if="column.dataIndex === 'followerEquity'">
            <value-des v="3.0106927 BTC" d="≈ 97,808 USD"></value-des>
          </template>
          <template v-else-if="column.dataIndex === 'rating'">
            <a-rate class="rate-blue" :value="2" />
          </template>
          <template v-else-if="column.dataIndex === 'performance'">
            <PerformanceLineChart></PerformanceLineChart>
          </template>
          <template v-if="column.key === 'action'">
            <a-button @click="toFollowPage">Follow</a-button>
          </template>
        </template>
      </a-table>

      <WithdrawDialog v-model:visible="withdrawDialogVisible"> </WithdrawDialog>
    </div>
  </div>
</template>

<style lang="less" scoped>
.AIBrokerView {
  position: relative;
  padding: 20px;
  background-color: #171e2d;

  .operation {
    position: absolute;
    top: -90px;
    right: 0;
    display: flex;
    line-height: 31px;
    font-size: 22px;

    .ant-btn-link {
      line-height: 30px;
      font-size: 22px;
    }

    .ant-btn {
      height: 46px;

      &:not([disabled]):hover {
        z-index: 1;
      }

      &.active {
        z-index: 1;
        color: #55a8e8;
        background: transparent;
        border-color: #55a8e8;
      }
    }

    .mid {
      margin-right: 10px;

      .app-iconify {
        display: inline;
        font-size: 27px;

        ::v-deep(svg) {
          margin: 0 auto;
        }
      }

      .ant-btn {
        // padding-top: 8px;
        line-height: 31px;
        text-align: center;
      }

      .ant-btn:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .ant-btn:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-left: -1px;
      }
    }
  }

  .ant-table-cell-row-hover {
    background: #394b70;

    .ant-btn {
      color: #fff;
      text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
      background: #3099f5;
      border-color: #3099f5;
      box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    }
  }

  ::v-deep(tbody) {
    background-color: #21293a;
  }

  ::v-deep(.ant-table) {
    overflow-x: auto;
    white-space: nowrap;

    .ant-table-cell::before {
      display: none !important;
    }

    td,
    th {
      text-align: right;
    }

    tr {
      td:first-child,
      th:first-child {
        text-align: left;
      }
    }

    tbody {
      td {
        // border-color: #424b60 !important;
        // border-right: 1px solid #424b60 !important;
        border-bottom: 1px solid #424b60 !important;
      }

      tr:first-child {
        td {
          border-top: 1px solid #424b60 !important;
        }
      }

      tr {
        td:first-child {
          border-left: 1px solid #424b60 !important;
        }

        td:last-child {
          border-right: 1px solid #424b60 !important;
        }
      }
    }
  }
}
</style>
