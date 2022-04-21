<script lang="ts" setup>
import {
  Table as ATable,
  Tag as ATag,
  Divider as ADivider,
} from 'ant-design-vue'
const columns = [
  {
    title: 'Time',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Items',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Deal Price',
    dataIndex: 'address',
    key: 'address',
  },
]

const data = [
  {
    key: '1',
    name: '2021-08-04 13:46:57 ',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: '2021-08-04 13:46:57 ',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: '2021-08-04 13:46:57 ',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
]
</script>
<template>
  <a-table
    :columns="columns"
    :data-source="data"
    class="ant-table-striped"
    :pagination="{ hideOnSinglePage: true }"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'age'">
        {{ record.age }}
        <div class="text-gray-400">50s</div>
      </template>
      <template v-else-if="column.key === 'address'">
        {{ record.address }}
        <div class="text-lime-500">+500</div>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
            v-for="tag in record.tags"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
        </span>
      </template>
    </template>
  </a-table>

  <div class="text-center pt-5">
    <a-button class="!text-gray-400" type="link">No more details...</a-button>
  </div>
</template>

<style lang="scss" scoped></style>
