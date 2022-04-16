<script lang="ts" setup>
import { Modal as AModal, Table as ATable } from 'ant-design-vue'
import { ref } from 'vue'

const visible = ref(false)
const visible2 = ref(false)

function handleOk() {}

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
  <div>
    <a-button @click="visible = true">弹窗1</a-button>
    <a-button @click="visible2 = true">弹窗2</a-button>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>

    <a-modal v-model:visible="visible2" @ok="handleOk">
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
        class="trade-result"
      >
        <template #bodyCell="{ column, record }">
          <span class="text-neutral-400 text-2xl">{{
            record[column.dataIndex]
          }}</span>
        </template>
      </a-table>
    </a-modal>
  </div>
</template>
