<script lang="ts" setup>
import { Modal as AModal, Table as ATable } from 'ant-design-vue'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
]
</script>
<template>
  <a-modal
    v-bind="$attrs"
    :footer="null"
    :class="$style.WithdrawDialog"
    width="726px"
    centered
  >
    <template #title>
      <div class="flex justify-between">
        <div class="flex-1">Trade result</div>
        <div class="flex-1 text-rose-500 mr-5 text-center">Profit 0</div>
        <div class="flex-1 text-green-500 mr-5 text-center">Profit 0</div>
      </div>
    </template>
    <a-table
      :pagination="{ hideOnSinglePage: true }"
      :columns="columns"
      :data-source="data"
    >
      <template #bodyCell="{ column, record }">
        <span class="text-neutral-400 text-2xl">{{
          record[column.dataIndex]
        }}</span>
      </template>
    </a-table>
  </a-modal>
</template>

<style lang="less" module>
.WithdrawDialog {
  :global {
    .ant-table-thead th {
      border-bottom: 1px solid #2e3647 !important;
    }

    .ant-modal-header {
      padding-left: 36px;
      padding-right: 36px;
    }

    .ant-modal-body {
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
      background-color: #242c3d;
    }

    th:first-child,
    td:first-child {
      padding-left: 36px;
    }

    th:last-child,
    td:last-child {
      padding-right: 36px;
    }
  }
}
</style>
