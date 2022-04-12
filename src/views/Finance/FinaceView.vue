<script lang="ts" setup>
import { ref } from 'vue'
import TabButtons from '@/components/TabButtons.vue'
import { Table as ATable, Tag as ATag } from 'ant-design-vue'

// import { defineComponent } from 'vue'
const list = [
  {
    label: 'Deposit',
    value: 'Deposit',
  },
  {
    label: 'Payment history',
    value: 'Payment history',
  },
  {
    label: 'Withdrawal',
    value: 'Withdrawal',
  },
]

const tabVal = ref('Deposit')
const radioVal = ref('a')

const columns = [
  {
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]
</script>
<template>
  <div class="FinaceView">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
    <div class="content enter-y">
      <div class="tabBtn">
        <a-radio-group v-model:value="radioVal">
          <a-radio-button value="a">Open Position</a-radio-button>
          <a-radio-button value="b">Close Position</a-radio-button>
        </a-radio-group>
      </div>

      <div class="table">
        <a-table
          :columns="columns"
          :data-source="data"
          class="ant-table-striped"
          :pagination="{ hideOnSinglePage: true }"
        >
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span> Name </span>
            </template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
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
                <a-divider type="vertical" />
                <a class="ant-dropdown-link"> More actions </a>
              </span>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.FinaceView {
  padding: 28px 80px;

  .content {
    padding: 30px;
    margin: 58px 0 0;
    background-color: #171e2d;
    box-shadow: 0 10px 58px 0 rgba(0, 0, 0, 0.24);
    border-radius: 6px;

    .ant-radio-group {
      // margin: 20px auto 0;
    }

    .tabBtn {
      margin: 20px 0 0;
      text-align: center;
    }

    .table {
      width: 100%;
    }
  }
}
</style>
