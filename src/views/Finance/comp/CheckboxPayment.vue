<script lang="ts" setup>
import CheckboxPlus from '@/components/CheckboxPlus/CheckboxPlus.vue'
defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()
function change(item: { name?: string }) {
  emit('update:modelValue', item.name || '')
}
</script>
<template>
  <CheckboxPlus
    cancellable
    :list="[{ name: 'bank' }, { name: 'USDT' }]"
    @change="change"
    class="CheckboxImage"
  >
    <template #bank>
      <div class="CheckboxImage_item">
        <div class="img">
          <img src="@/assets/bank.png" />
        </div>
        <div class="label">Bank Account</div>
      </div>
    </template>
    <template #USDT>
      <div class="CheckboxImage_item">
        <div class="img">
          <img src="@/assets/t.png" />
        </div>
        <div class="label">USDT Account</div>
      </div>
    </template>
  </CheckboxPlus>
</template>

<style lang="less" scoped>
.CheckboxImage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 15px;

  & > ::v-deep(.item) {
    padding: 15px;
  }
}

.CheckboxImage_item {
  display: flex;
  color: #fff;
  font-size: 14px;

  & > .label {
    line-height: 35px;
    margin-left: 23px;
  }
}
</style>
