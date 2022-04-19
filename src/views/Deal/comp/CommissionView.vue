<script lang="ts" setup>
import { Table as ATable } from 'ant-design-vue'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]
</script>
<template>
  <div>
    <div class="CommissionView enter-y mt-12">
      <a-table
        :pagination="{ hideOnSinglePage: true }"
        class="ant-table-striped"
        :columns="columns"
        :data-source="data"
      >
        <template #bodyCell="{ column, text, index }">
          <template v-if="column.dataIndex === 'name'">
            <a :class="index % 2 ? 'text-rose-500' : 'text-lime-500'">{{
              text
            }}</a>
          </template>
        </template>
      </a-table>
      <div class="CommissionView_footer">
        <a-button type="link">View more ...</a-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.CommissionView {
  background-color: #171e2d;
  box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
  border-radius: @border-radius-base;
  padding: 8px 27px 0;
  // margin-top: 27px;
}

.CommissionView_footer {
  padding: 12px 0;
  text-align: center;

  .ant-btn {
    color: #b6b5c5;
  }
}
</style>
