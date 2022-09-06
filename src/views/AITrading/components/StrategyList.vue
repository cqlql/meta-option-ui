<script lang="ts" setup>
import TextTag from './TextTag.vue'
import ValueMulti from './ValueMulti.vue'
import SvgIcon from '@/components/Icon/src/SvgIcon.vue'
import ValueDes from './ValueDes.vue'
import { Rate as ARate } from 'ant-design-vue'
import Icon from '@/components/Icon/src/Icon.vue'
</script>
<template>
  <div class="strategy-list">
    <div class="strategy-list__header">
      <div class="l"> strategy </div>
      <div class="r">
        <a-button class="active">
          <template #icon>
            <Icon icon="ant-design:share-alt-outlined"></Icon>
          </template>
        </a-button>
        <div class="mid-line"></div>
        <a-button>
          <template #icon>
            <Icon icon="material-symbols:bookmark-outline"></Icon>
          </template>
        </a-button>
      </div>
    </div>
    <div class="strategy-list__body">
      <div class="row">
        <div class="l"> Name </div>
        <div class="r">
          <ValueMulti text="Fx Scalpers">
            <TextTag color="yellow">BTC</TextTag>
            <TextTag>i</TextTag>
            <SvgIcon name="trading-history" style="font-size: 18px"></SvgIcon>
          </ValueMulti>
        </div>
      </div>
      <div class="row">
        <div class="l">Total</div>
        <div class="r"> <span class="green-color">+57.63%</span></div>
      </div>
      <div class="row">
        <div class="l">Today</div>
        <div class="r"> <span class="red-color">-57.63%</span></div>
      </div>
      <div class="row">
        <div class="l">Follower’s equity</div>
        <div class="r">
          <ValueDes v="0.21048199 BTC" d="≈ 6,838 USD"> </ValueDes>
        </div>
      </div>
      <div class="row">
        <div class="l">IFE</div>
        <div class="r">3 BTC</div>
      </div>
      <div class="row">
        <div class="l">Rating</div>
        <div class="r"> <a-rate class="rate-blue" :value="2" /></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.strategy-list {
  background-color: #171e2d;
  border-radius: 4px;
  padding: 10px;
}

.strategy-list__header {
  display: flex;
  align-items: center;
  height: 62px;
  padding: 0 20px;

  .l {
    flex: 1;
    color: #898e9e;
    font-size: 16px;
  }

  .r {
    display: flex;
    gap: 10px;
  }

  .mid-line {
    width: 1px;
    height: 32px;
    background-color: #434343;
  }

  .ant-btn {
    line-height: 30px;
    color: #898e9e;

    .app-iconify {
      font-size: 22px;

      svg {
        vertical-align: baseline;
      }
    }

    &.active {
      color: #55a8e8;
      border-color: #55a8e8;
      background: transparent;
    }
  }
}

.strategy-list__body {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 65px;

  .row {
    display: flex;
    height: 54px;
    border-top: solid 1px #424b60;
    padding: 0 20px;

    .l {
      display: flex;
      align-items: center;
      color: #898e9e;
      flex: 1;
    }

    .r {
      display: flex;
      align-items: center;
    }
  }

  .ant-rate {
    font-size: 16px;

    ::v-deep(.ant-rate-star:not(:last-child)) {
      margin-right: 4px;
    }
  }
}

@media (min-width: 1100px) {
  .strategy-list__body {
    grid-template-columns: repeat(3, auto);
  }
}
</style>
