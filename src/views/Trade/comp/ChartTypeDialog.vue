<script lang="ts" setup>
import { Modal as AModal } from 'ant-design-vue'
import IconFont from '@/components/IconFont/IconFont.vue'
import { ref } from 'vue'
const props = defineProps<{
  visible: boolean
}>()
const emit = defineEmits<{
  (e: 'update:visible', v: boolean): void
}>()

const selectedIndex = ref(0)

const list = [
  {
    icon: 'chart-area',
    name: '范围',
  },
  {
    icon: 'chart-line',
    name: '线形图',
  },
  {
    icon: 'chart-stick',
    name: '棒状图',
  },
  {
    icon: 'chart-k-line',
    name: 'k线图',
  },
]

function select(index: number) {
  selectedIndex.value = index
}

function handleOk() {}
</script>
<template>
  <a-modal
    :visible="visible"
    title="Chart type"
    :class="$style.dialog"
    @update:visible="(v:boolean) => emit('update:visible', v)"
    @ok="handleOk"
  >
    <div class="chart-btns">
      <div
        v-for="(item, index) of list"
        :key="index"
        class="item"
        :class="{ active: index === selectedIndex }"
        @click="select(index)"
      >
        <div class="icon">
          <IconFont class="def" :name="item.icon"></IconFont>
          <IconFont class="tick" name="chart-area"></IconFont>
        </div>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </a-modal>
</template>

<style lang="less" module>
.dialog {
  :global {
    .chart-btns {
      display: flex;
      gap: 15px;

      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 122px;
        height: 120px;
        background-color: #1b222d;
        border-radius: 3px;
        flex-direction: column;
        transition: background-color 0.2s;

        &:hover {
          background-color: #1d2e41;
        }

        &.active {
          background-color: rgba(48, 153, 245, 0.5);

          .tick {
            opacity: 1;
            transform: scale(1);
          }

          .def {
            opacity: 0;
          }
        }

        .icon {
          position: relative;
        }

        .def {
          transition: 0.2s;
          transition-property: opacity;
        }

        .tick {
          position: absolute;
          left: 0;
          top: 0;
          transform: scale(0);
          opacity: 0;
          transition: 0.2s;
          transition-property: opacity, transform;
        }

        .iconfont {
          line-height: 1;
          font-size: 40px;
        }

        .name {
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
