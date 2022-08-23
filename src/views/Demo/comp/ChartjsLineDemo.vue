<script lang="ts" setup>
import ChartJs from '@/components/ChartJs.vue'
const datapoints = []

for (let i = 0; i < 20; i++) {
  datapoints.push(i + ~~(Math.random() * 10))
}
for (let i = 50; i--; ) {
  datapoints.push(i + ~~(Math.random() * 10))
}
for (let i = 0; i < 10; i++) {
  datapoints.push(i + ~~(Math.random() * 10))
}
for (let i = 20; i--; ) {
  datapoints.push(i + ~~(Math.random() * 10))
}
for (let i = 0; i < 10; i++) {
  datapoints.push(i + ~~(Math.random() * 10))
}
for (let i = 20; i--; ) {
  datapoints.push(i + ~~(Math.random() * 10))
}
const canvas = document.createElement('canvas')
const gradient = (
  canvas.getContext('2d') as CanvasRenderingContext2D
).createLinearGradient(0, 0, 0, 300)

// Add three color stops
gradient.addColorStop(0, 'rgba(5,168,86,0.5)')
gradient.addColorStop(1, 'rgba(5,168,86,0)')
const conf = {
  type: 'line',
  data: {
    labels: datapoints,
    datasets: [
      {
        label: 'Filled',
        backgroundColor: gradient,
        borderColor: '#05a856',
        data: datapoints,
        // cubicInterpolationMode: 'monotone',
        // tension: 0.2,
        borderWidth: 1,
        fill: true,
        pointRadius: 0,
      },
    ],
  },
  options: {
    scales: {
      y: {
        // display: false,
        position: 'right',
        ticks: {
          borderColor: '#fff',
        },
        grid: {
          color: '#fff',
          drawBorder: false,
        },
      },
      x: {
        // display: false,
        ticks: {
          borderColor: '#fff',
        },
        grid: {
          color: '#fff',
          drawBorder: false,
        },
      },
    },
  },
}
</script>
<template>
  <div>
    <ChartJs width="380" height="330" :conf="conf"></ChartJs>
  </div>
</template>
