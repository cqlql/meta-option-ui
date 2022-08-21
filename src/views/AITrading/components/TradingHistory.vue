<script lang="ts" setup>
import { Table as ATable } from 'ant-design-vue'
import CardBox from './CardBox.vue'

const columns = [
  {
    title: 'Symbol',
    dataIndex: 'symbol',
  },
  {
    title: 'Side',
    dataIndex: 'side',
  },
  {
    title: 'Open',
    dataIndex: 'open',
  },
  {
    title: 'Close',
    dataIndex: 'close',
    sorter: (a: any, b: any) => a - b,
  },
  {
    title: '%ROI on Margin',
    dataIndex: 'roiMargin',
  },
]

const data: any[] = [
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   age: 32,
  //   address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
  //   tags: ['nice', 'developer'],
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   age: 42,
  //   address: 'London No. 2 Lake Park, London No. 2 Lake Park',
  //   tags: ['loser'],
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   age: 32,
  //   address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
  //   tags: ['cool', 'teacher'],
  // },
]
</script>
<template>
  <CardBox class="TradingHistory" title="Trading history">
    <a-table
      size="small"
      :columns="columns"
      :data-source="data"
      emptyText="The strategy’s trading history in private"
    >
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
      </template>
      <template #emptyText>
        The strategy’s trading history in private
      </template>
    </a-table>
  </CardBox>
</template>

<style lang="less" scoped>
::v-deep(.ant-table) {
  .ant-table-thead {
  }

  .ant-table-thead > tr > th {
    padding: 10px 0;
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
</style>
