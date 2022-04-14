<script lang="ts" setup>
import { Modal as AModal } from 'ant-design-vue'
import { ref } from 'vue'

const visible = ref(false)

function handleOk() {}
</script>
<template>
  <div>
    <a-button @click="visible = true">弹窗</a-button>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<style lang="scss" scoped></style>
