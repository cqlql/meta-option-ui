<script lang="ts" setup>
import { ref } from 'vue'
import Icon from '@/components/Icon/src/Icon.vue'

const tabVal = ref('')
</script>
<template>
  <div class="AIBrokerFlowerView mt-8">
    <div class="enter-y">
      <a @click="tabVal = 'MyAccount'">
        <Icon icon="ic:baseline-keyboard-arrow-left"></Icon> back
      </a>
    </div>
    <div class="max-w-500px mt-3 mx-auto enter-y columns-3 gap-4">
      <div>
        <div class="strategy-list">
          <div class="strategy-list__header">
            <div class="l"> strategy </div>
            <div class="r">
              <a-button></a-button>
              <div class="mid-line"></div>
              <a-button></a-button>
            </div>
          </div>
          <div class="strategy-list__body">
            <div class="row">
              <div class="l"></div>
              <div class="r"></div>
            </div>
            <div class="row">
              <div class="l"></div>
              <div class="r"></div>
            </div>
          </div>
        </div>
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.AIBrokerFlowerView {
  .cont {
    // column-count: 3;
    // column-gap: 10px;
  }
}
</style>
