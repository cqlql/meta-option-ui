<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
import { ref } from 'vue'

const expanded = ref(false)

// --------
// 进入时
// --------
let listHeight = 0
function beforeEnter(el: HTMLDivElement) {
  if (!listHeight) {
    el.style.display = 'block'
    listHeight = el.clientHeight
    el.style.display = 'none'
  }
}

function enter(el: HTMLDivElement, done: () => void) {
  el.style.height = '0'
  setTimeout(() => {
    el.style.height = listHeight + 'px'
    setTimeout(() => {
      done()
    }, 300)
  }, 1)
}

function leave(el: HTMLDivElement, done: () => void) {
  el.style.height = '0'
  setTimeout(() => {
    done()
  }, 300)
}
function afterLeave(el: HTMLDivElement) {
  el.style.height = ''
}
</script>
<template>
  <div class="BalanceList">
    <div class="labelValue">
      <div class="label" @click="expanded = !expanded">
        <div class="flex items-center justify-center h-[100%]">
          <i class="arrow" :class="{ expanded }"></i>
          <!-- <i class="arrow expanded"></i> -->

          <Icon
            class="align-middle !text-3xl"
            icon="ri:money-dollar-circle-fill"
          ></Icon>

          <span class="align-middle leading-[18px] ml-2">Balance</span>
        </div>
      </div>
      <div class="value">10,000.00</div>
    </div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      @after-leave="afterLeave"
      :css="false"
    >
      <div class="list-transition" v-show="expanded">
        <div class="list">
          <div v-for="v of 3" :key="v" class="item">
            <div class="name">INR</div>
            <div class="wave">~</div>
            <div class="value">100.000</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="less" scoped>
.BalanceList {
  border: solid 1px #333d51;
  border-radius: @border-radius-base;

  .labelValue {
    display: flex;
    height: 66px;
    background-color: #263042;
    font-size: 18px;

    .arrow {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 8px 8px 0 8px;
      border-color: #fff transparent transparent transparent;
      transition: transform 0.2s;
      margin-top: 4px;
      margin-right: 15px;
    }

    .arrow.expanded {
      // border-width: 0 8px 8px 8px;
      // border-color: transparent transparent #fff transparent;
      transform: rotate(180deg);
    }

    .label {
      flex: 1;
      background-color: #21293a;
      color: #75859c;
      border-right: solid 1px #333d51;
    }

    .value {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 23px;
    }
  }

  .list-transition {
    overflow: hidden;
    transition: height 0.3s;
  }

  .list {
    padding: 6px 0;
    text-align: center;
    border-top: solid 1px #333d51;

    .item {
      display: flex;
      line-height: 35px;
    }

    .wave {
      flex: 0;
    }

    .name {
      flex: 1;
    }

    .value {
      flex: 1;
    }
  }
}
</style>
