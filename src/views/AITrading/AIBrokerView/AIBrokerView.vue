<script lang="ts" setup>
import { Rate as ARate, Table as ATable } from 'ant-design-vue'
import ValueMulti from '../components/ValueMulti.vue'
import TextTag from '../components/TextTag.vue'
import SvgIcon from '@/components/Icon/src/SvgIcon.vue'
import ValueDes from '../components/ValueDes.vue'

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
</script>
<template>
  <div>
    <div class="AIBrokerView enter-y">
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
            line chart
          </template>
          <template v-if="column.key === 'action'">
            <a-button>Follow</a-button>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<style lang="less" scoped>
.AIBrokerView {
  background-color: #171e2d;
  padding: 20px;
  margin: 44px 0 0;

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
