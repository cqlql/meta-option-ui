<script lang="ts" setup>
import { Table as ATable, Avatar as AAvatar } from 'ant-design-vue'
import CardBox from '@/components/CardBox.vue'
import { ref } from 'vue'
import MyClientsDataDialog from './MyClientsDataDialog.vue'
const columns = [
  {
    dataIndex: 'key',
    width: 50,
  },
  {
    dataIndex: 'avatar',
    width: 50,
  },
  {
    dataIndex: 'name',
  },
]

const data = [
  {
    key: '1',
    avatar:
      'https://img14.360buyimg.com/n5/jfs/t1/209043/5/5395/186082/616a7d37E53fcfa71/50fadc18181d41d1.jpg',
    name: 'Jimmy M',
    date: '11/AUG',
  },
  {
    key: '2',
    avatar:
      'https://img14.360buyimg.com/n5/jfs/t1/215864/25/583/148403/616a7d2fEc4a5a064/1d9b7d63467c3fc4.jpg',
    name: 'Mr black',
    age: '15/FEB',
  },
  {
    key: '3',
    avatar:
      'https://img14.360buyimg.com/n5/jfs/t1/142098/4/23069/115054/616a7d31E11791773/7045a58e2d75eea4.jpg',
    name: 'Sabay D',
    date: '11/AUG',
  },
]

const dialogVisible = ref(false)
</script>
<template>
  <CardBox title="My Clients">
    <a-table
      :showHeader="false"
      :columns="columns"
      :data-source="data"
      class="ant-table-striped mt-6"
      :pagination="{ hideOnSinglePage: true }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'avatar'">
          <a-avatar size="large" :src="record.avatar" />
        </template>
        <template v-if="column.dataIndex === 'name'">
          {{ record.name }}
          <div class="text-gray-400">{{ record.date }}</div>
        </template>
      </template>
    </a-table>

    <div class="text-right mt-6">
      <a-button
        @click="dialogVisible = true"
        class="!px-8"
        type="primary"
        size="large"
        >Share to friend</a-button
      >
    </div>
  </CardBox>

  <MyClientsDataDialog v-model:visible="dialogVisible"></MyClientsDataDialog>
</template>

