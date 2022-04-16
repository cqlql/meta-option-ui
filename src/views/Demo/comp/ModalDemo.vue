<script lang="ts" setup>
import { Modal as AModal, Table as ATable } from 'ant-design-vue'
import { ref } from 'vue'
import AvatarVue from '@/components/AvatarVue.vue'

const visible = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)

function handleOk() {}
</script>
<template>
  <div>
    <a-button @click="visible = true">弹窗1</a-button>
    <a-button @click="visible2 = true">弹窗2</a-button>
    <a-button @click="visible3 = true">弹窗3</a-button>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>

    <a-modal v-model:visible="visible3" @ok="handleOk">
      <template #title>
        <div class="text-center">My Clients</div>
      </template>
      <div :class="$style.myClients">
        <div class="top">
          <div class="left-avatar">
            <AvatarVue></AvatarVue>
            <div class="text-center">User Name</div>
          </div>

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
      </div>
    </a-modal>
  </div>
</template>

<style lang="less" module>
.myClients {
  :global {
    .top {
      display: flex;
    }

    .left-avatar {
      padding-right: 30px;

      .userName {
        text-align: center;
      }
    }

    .right-info {
      flex: 1;

      .info {
        display: flex;
        height: 86px;
        border: solid 2px #333d51;
        background-color: #21293a;
        border-radius: @border-radius-base;

        .item {
          display: flex;
          justify-content: center;
          // width: 180px;
          padding: 0 20px;
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
          font-size: 24px;
          padding-bottom: 4px;
        }
      }
    }
  }
}
</style>
