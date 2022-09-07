<script lang="ts" setup>
import { Table as ATable } from 'ant-design-vue'
import TableBoxOne from '@/components/TableBoxOne.vue'

const dataSource = [
  {
    key: 0,
    date: '2022/09/09',
    name: '',
    amount: '1,333',
    note: 'Trade profit',
  },
]

for (let i = 1; i < 100; i++) {
  dataSource.push({
    key: i,
    date: '2022/09/09',
    name: '',
    amount: String(~~(Math.random() * 1000)),
    note: 'Cash Out',
  })
}

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },

  {
    title: 'Amount',
    dataIndex: 'amount',
  },
  {
    title: 'Note',
    dataIndex: 'note',
  },
]
</script>
<template>
  <!-- 此最外层div是为了解决 enter-y 延迟问题 -->
  <div>
    <TableBoxOne class="mt-12 enter-y">
      <a-table
        :dataSource="dataSource"
        :columns="columns"
        :pagination="{
          total: 85,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }"
      >
        <template #bodyCell="{ column, index }">
          <template v-if="column.dataIndex === 'name'">
            <span v-if="index % 2" class="green-color">Income</span>
            <span v-else class="red-color">Withdraw</span>
          </template>
        </template>
      </a-table>
    </TableBoxOne>
  </div>
</template>

<!-- <style lang="less" scoped></style> -->
