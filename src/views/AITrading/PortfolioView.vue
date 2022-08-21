<script lang="ts" setup>
import TitleBox from '@/components/TitleBox.vue'
import {
  Select as ASelect,
  Table as ATable,
  TableColumnsType,
} from 'ant-design-vue'
import { ref } from 'vue'
import PortfolioWithdrawDialog from './components/PortfolioWithdrawDialog.vue'
const provinceData = ['All', 'Jiangsu']
const province = ref('All')

const columns: TableColumnsType = [
  { title: 'AI Broker', dataIndex: 'aiBroker' },
  { title: 'Product', dataIndex: 'product' },
  { title: 'Deals', dataIndex: 'deals' },
  { title: 'Margin', dataIndex: 'margin' },
]

interface DataItem {
  key: string
  aiBroker: string
  product: string
  deals: number
  margin: string
}

const data: DataItem[] = [
  {
    key: '1',
    aiBroker: 'FX Scalpers',
    product: 'Gold',
    deals: 120,
    margin: '+5.51%',
  },
  {
    key: '2',
    aiBroker: 'Fractalz',
    product: 'Gold',
    deals: 120,
    margin: '-5.51%',
  },
]

const withdrawDialogVisible = ref(false)

function openWithdraw() {
  withdrawDialogVisible.value = true
}
</script>
<template>
  <div>
    <div class="PortfolioView max-w-1200px mx-auto mt-12 enter-y">
      <div class="operation">
        <div>
          <a-button @click="openWithdraw">Withdraw</a-button>
        </div>
      </div>
      <div class="box">
        <div class="tit">Current holdings</div>
        <div class="select">
          <TitleBox title="Currency">
            <a-select
              size="large"
              v-model:value="province"
              :options="provinceData.map((pro) => ({ value: pro }))"
            ></a-select>
          </TitleBox>
        </div>
        <div class="data">
          <a-table :columns="columns" :data-source="data" :pagination="false">
            <template #bodyCell="{ column, record }">
              <span
                v-if="column.dataIndex === 'margin'"
                :class="record.key === '1' ? 'green-color' : 'red-color'"
              >
                {{ record.margin }}
              </span>
            </template>
          </a-table>
        </div>
      </div>
      <div class="box">
        <div class="tit">History</div>
        <div class="select">
          <TitleBox title="Currency">
            <a-select
              size="large"
              v-model:value="province"
              :options="provinceData.map((pro) => ({ value: pro }))"
            ></a-select>
          </TitleBox>
        </div>
        <div class="data">
          <a-table :columns="columns" :data-source="data" :pagination="false">
            <template #bodyCell="{ column, record }">
              <span
                v-if="column.dataIndex === 'margin'"
                :class="record.key === '1' ? 'green-color' : 'red-color'"
              >
                {{ record.margin }}
              </span>
            </template>
          </a-table>
        </div>
      </div>
    </div>
    <PortfolioWithdrawDialog
      v-model:visible="withdrawDialogVisible"
    ></PortfolioWithdrawDialog>
  </div>
</template>

<style lang="less" scoped>
.PortfolioView {
  display: flex;
  gap: 20px;

  .box {
    flex: 1;
    background-color: #171e2d;
    box-shadow: -9px 5px 58px 0 rgba(0, 0, 0, 0.24);
    border-radius: 6px;
    padding: 20px;
  }

  .tit {
    padding: 0 4px 20px;
    color: #898e9e;
    font-weight: bold;
  }

  .select {
    ::v-deep(.TitleBox) {
      padding: 0;
      border: none;

      .TitleBox_title {
        left: 10px;
        z-index: 1;
        padding: 0 5px;
        background-color: #171e2d;
      }
    }

    ::v-deep(.ant-select) {
      // width: 100%;
      display: block;

      .ant-select-selector {
        background-color: #171e2d;
        border-radius: 10px;
        padding: 0 20px;
      }
    }
  }

  .data {
    padding-top: 20px;
  }

  ::v-deep(.ant-table) {
    .ant-table-thead {
    }

    .ant-table-thead > tr > th {
      color: #898e9e;
      border-top: 1px solid #424b60;
      border-bottom: 1px solid #424b60;

      &::before {
        display: none;
      }

      &:first-child {
        padding-left: 10px;
      }

      &:last-child {
        padding-left: 10px;
      }
    }
  }

  .operation {
    position: absolute;
    top: -88px;
    right: 0;
    display: flex;
    line-height: 31px;
    font-size: 22px;

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
  }
}
</style>
