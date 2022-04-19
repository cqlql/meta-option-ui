<script lang="ts" setup>
type ItemType = {
  label: string
  value: string
}
const props = defineProps<{
  modelValue?: string
  list: ItemType[]
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', v: string): void
  (e: 'change', v: string): void
}>()

function onSelect(index: number) {
  let { list } = props
  let pre = props.modelValue
  let value = list[index].value
  emits('update:modelValue', value)
  if (pre !== value) {
    emits('change', value)
  }
}
</script>

<template>
  <div class="TabButtons">
    <div
      v-for="(item, index) of list"
      :key="index"
      class="item"
      :class="{ active: modelValue === item.value }"
      @click="onSelect(index)"
    >
      {{ item.label }}
      <!-- <div class="item_smile"> </div> -->
    </div>
  </div>
</template>

<style lang="less">
.TabButtons {
  position: relative;
  // z-index: 1;
  display: flex;
  // height: 45px;

  // background-color: #f8f8f8;
  color: #fff;
  flex-wrap: wrap;

  & > .item {
    // position: relative;
    width: 170px;
    line-height: 44px;
    font-size: 14px;
    text-align: center;
    // flex: 1;
    border: solid 2px #424b60;
    cursor: pointer;
    transition: color 0.3s, background 0.3s;
    margin-right: -1px;

    // & + .item {
    //   // border-left: none;
    // }

    &:first-child {
      border-radius: @border-radius-base 0 0 @border-radius-base;
    }

    &:last-child {
      border-radius: 0 @border-radius-base @border-radius-base 0;
      margin-right: 0;
    }

    &:hover {
      color: @primary-color;
    }

    // & > .item_smile {
    //   position: absolute;
    //   left: 50%;
    //   bottom: 0;
    //   width: 0;
    //   height: 0;
    //   transition: width 0.3s ease;
    //   overflow: hidden;
    //   transform: translate(-50%);
    //   background-color: #ffb21f;
    // }
  }

  & > .item.active {
    color: @primary-color;
    background-color: #171e2d;
    // font-weight: bold;

    // & > .item_smile {
    //   width: 100%;
    //   height: 3px;
    // }
  }
}

.TabButtons.scroll {
  display: block;
  white-space: nowrap;
  overflow-x: auto;
  // overflow-y: hidden;
  height: auto;

  & > .item {
    display: inline-block;
    padding: 0 8px;
  }
}

// .TabButtons.vertical {
//   display: block;
//   height: auto;
//   // width: 60px;
//   // 滚动条
//   // max-height: 60px;
//   overflow: auto;

//   & > .item > .item_smile {
//     display: none;
//   }

//   & > .item.active {
//     background-color: #fff;
//     font-weight: bold;
//     color: inherit;
//   }
// }
</style>
