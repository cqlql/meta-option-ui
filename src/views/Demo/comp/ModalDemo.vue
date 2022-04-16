<script lang="ts" setup>
import { Modal as AModal } from 'ant-design-vue'
import { ref } from 'vue'

const visible = ref(false)
// const visible2 = ref(false)
// const visible3 = ref(false)

function handleOk() {}
</script>
<template>
  <div>
    <a-button @click="visible = true">弹窗1</a-button>
    <!-- <a-button @click="visible2 = true">弹窗2</a-button>
    <a-button @click="visible3 = true">弹窗3</a-button> -->
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
