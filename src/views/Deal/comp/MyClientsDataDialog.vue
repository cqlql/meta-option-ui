<script lang="ts" setup>
import {
  Modal as AModal,
  Table as ATable,
  Avatar as AAvatar,
} from 'ant-design-vue'

import AvatarUser from '@/components/AvatarUser.vue'
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
  {
    dataIndex: 'level',
  },
]

const data = [
  {
    key: '1',
    avatar:
      'https://img14.360buyimg.com/n5/jfs/t1/209043/5/5395/186082/616a7d37E53fcfa71/50fadc18181d41d1.jpg',
    name: 'Jimmy M',
    date: '11/AUG',
    level: 'Level 1',
  },
  {
    key: '2',
    avatar:
      'https://img14.360buyimg.com/n5/jfs/t1/215864/25/583/148403/616a7d2fEc4a5a064/1d9b7d63467c3fc4.jpg',
    name: 'Mr black',
    age: '15/FEB',
    level: 'Level 1',
  },
  {
    key: '3',
    avatar:
      'https://img14.360buyimg.com/n5/jfs/t1/142098/4/23069/115054/616a7d31E11791773/7045a58e2d75eea4.jpg',
    name: 'Sabay D',
    date: '11/AUG',
    level: 'Level 1',
  },
]
</script>
<template>
  <a-modal
    :footer="null"
    :class="$style.MyClientsDataDialog"
    width="545px"
    centered
    v-bind="$attrs"
  >
    <template #title>
      <div class="text-center"> My Clients </div>
    </template>

    <div class="top">
      <AvatarUser
        src="https://img13.360buyimg.com/n5/jfs/t1/142098/4/23069/115054/616a7d31E11791773/7045a58e2d75eea4.jpg"
        class="left-avatar -mt-2"
        >User Name</AvatarUser
      >
      <div class="right-info">
        <div class="info">
          <div class="item">
            <div class="label"> Total: </div>
            <div class="value"> 5 Person</div>
          </div>
          <div class="item">
            <div class="label"> 1st Level: </div>
            <div class="value">1 </div>
          </div>
        </div>
      </div>
    </div>

    <a-table
      :showHeader="false"
      :columns="columns"
      :data-source="data"
      class="ant-table-striped mt-5"
      :pagination="{ hideOnSinglePage: true }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'avatar'">
          <a-avatar size="large" :src="record.avatar" />
        </template>
        <template v-else-if="column.dataIndex === 'name'">
          {{ record.name }}
          <div class="text-gray-400">{{ record.date }}</div>
        </template>
        <template v-else-if="column.dataIndex === 'level'">
          <div class="text-[#389bf2] text-right pr-4">{{ record.level }}</div>
        </template>
      </template>
    </a-table>
  </a-modal>
</template>

<style lang="less" module>
.MyClientsDataDialog {
  :global {
    .ant-modal-body {
      padding: 35px;
      padding-top: 0;
    }

    .top {
      display: flex;

      .left-avatar {
        padding-right: 23px;
      }

      .right-info {
        flex: 1;

        .info {
          display: flex;
          width: 270px;
          height: 65px;
          border: solid 1px #333d51;
          background-color: #21293a;
          border-radius: @border-radius-base;

          .item {
            display: flex;
            justify-content: center;
            // width: 136px;
            // width: 135px;
            padding: 0 15px;
            text-align: center;
            flex: 1;
            flex-direction: column;
          }

          .item:first-child {
            border-right: solid 1px #333d51;
          }

          .item:last-child {
            border-left: solid 1px #333d51;
          }

          .label {
            line-height: 1;
            color: #a2a9bb;
          }

          .value {
            line-height: 1.4;
            font-size: 18px;
            padding-bottom: 3px;
          }
        }
      }
    }
  }
}
</style>
