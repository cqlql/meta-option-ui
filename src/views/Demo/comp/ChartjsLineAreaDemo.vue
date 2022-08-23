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

const eCanvasRef = ref<HTMLCanvasElement | undefined>()
watch(eCanvasRef, function (eCanvas) {
  if (eCanvas) {
    const datapoints = []

    for (let i = 0; i < 20; i++) {
      datapoints.push(Math.random() * 200 - 60)
    }
    const ctx = eCanvas.getContext('2d')
    const gradient = (ctx as CanvasRenderingContext2D).createLinearGradient(
      20,
      0,
      220,
      0,
    )

    // Add three color stops
    gradient.addColorStop(0, 'green')
    gradient.addColorStop(1, 'cyan')
    new Chart(eCanvas, {
      type: 'line',
      data: {
        labels: datapoints,
        datasets: [
          {
            label: 'Filled',
            backgroundColor: 'rgba(82,175,238,0.15)',
            borderColor: 'rgb(82,175,238)',
            data: datapoints,
            // cubicInterpolationMode: 'monotone',
            tension: 0.2,
            borderWidth: 1,
            fill: true,
            pointRadius: 0,
          },
        ],
      },
      options: {
        scales: {
          y: {
            display: false,
          },
          x: {
            display: false,
          },
        },
      },
    })
  }
})
</script>
<template>
  <div>
    <!-- <canvas ref="eCanvasRef" id="myChart" width="105" height="26"></canvas> -->
    <canvas ref="eCanvasRef" id="myChart" width="100" height="60"></canvas>
  </div>
</template>
