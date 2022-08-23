<script lang="ts" setup>
import {
  Chart,
  LineElement,
  LinearScale,
  LineController,
  BarElement,
  BarController,
  CategoryScale,
  PointElement,
  Filler,
  // registerables,
} from 'chart.js'
import { ref, watch } from 'vue'
Chart.register(
  LineElement,
  LinearScale,
  LineController,
  BarElement,
  BarController,
  CategoryScale,
  PointElement,
  Filler,
  // ...registerables,
)
const props = defineProps<{
  conf: any
  width?: string
  height?: string
}>()

const eCanvasRef = ref<HTMLCanvasElement | undefined>()
watch([eCanvasRef, () => props.conf], function (eCanvas) {
  if (eCanvas) {
    new Chart(eCanvas, props.conf)
  }
})
</script>
<template>
  <canvas ref="eCanvasRef" :width="width" :height="height"></canvas>
</template>
