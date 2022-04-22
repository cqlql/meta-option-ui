<script lang="ts" setup>
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    list: any[]
    noTick?: boolean
    cancellable?: boolean
    modelValue?: number
  }>(),
  {
    modelValue: -1,
  },
)

const emit = defineEmits<{
  (e: 'select', item: any): void
  (e: 'change', item: any): void
}>()

let selectedIndex = ref(props.modelValue)
function select(index: number) {
  if (props.cancellable) {
    cancellableSelect(index)
  } else {
    requiredSelect(index)
  }
}

function requiredSelect(index: number) {
  let selectedItem = props.list[index]
  if (selectedIndex.value !== index) {
    selectedIndex.value = index
    emit('change', selectedItem)
  }

  emit('select', selectedItem)
}

function cancellableSelect(index: number) {
  if (selectedIndex.value === index) {
    selectedIndex.value = -1
    emit('change', {})
    emit('select', {})
  } else {
    selectedIndex.value = index
    let selectedItem = props.list[index]
    emit('change', selectedItem)
    emit('select', selectedItem)
  }
}
</script>
<template>
  <div class="checkbox-plus" :class="{ noTick }">
    <div
      v-for="(item, index) of list"
      :key="index"
      class="item"
      :class="{ selected: selectedIndex === index }"
      @click="select(index)"
    >
      <span class="checkbox-plus-tick"></span>
      <slot :item="item"></slot>
      <slot v-if="item.name" :name="item.name" :item="item"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.checkbox-plus {
  display: flex;

  & > .item {
    background-color: #263042;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
    border-radius: @border-radius-base;
    border: solid 1px #333d51;
    position: relative;
    // overflow: hidden;
    padding: 8px 15px;
    color: #a2a9bb;

    & > .checkbox-plus-tick {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 14px;
      height: 14px;
      direction: ltr;
      // background-color: #1890ff;
      // border: 1px solid #d9d9d9;
      border-radius: 0 0 0 @border-radius-base;
      border-collapse: separate;
      transition: all 0.3s;
      // opacity: 0;

      &::after {
        content: '';
        position: absolute;
        left: 21%;
        top: 42%;
        display: table;
        width: 5.71428571px;
        height: 9.14285714px;
        border: 2px solid #27435e;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(0) translate(-50%, -50%);
        opacity: 0;
        // transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
      }
    }

    &.selected {
      background-color: #27435e;
      border-color: #49aaee;

      & > .checkbox-plus-tick {
        background-color: #49aaee;

        &::after {
          transform: rotate(45deg) scale(1) translate(-50%, -50%);
          opacity: 1;
        }
      }
    }
  }

  &.lime > .item {
    &.selected {
      background-color: #405858;
      border-color: #a1efb7;

      & > .checkbox-plus-tick {
        background-color: #a1efb7;
      }
    }
  }

  &.noTick > .item > .checkbox-plus-tick {
    display: none;
  }
}
</style>
