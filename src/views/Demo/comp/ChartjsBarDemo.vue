<script lang="ts" setup>
import ChartJs from '@/components/ChartJs.vue'
const datapoints = []

for (let i = 10; i--; ) {
  datapoints.push(~~(Math.random() * 100 - 50))
}
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
const upGradient = ctx.createLinearGradient(0, 0, 0, 150)
upGradient.addColorStop(0, 'rgb(6,159,83)')
upGradient.addColorStop(1, 'rgba(6,159,83,0.3)')

const downGradient = ctx.createLinearGradient(0, 150, 0, 300)
downGradient.addColorStop(0, 'rgba(201,64,64,0.3)')
downGradient.addColorStop(1, 'rgb(201,64,64)')

const conf = {
  type: 'bar',
  data: {
    labels: datapoints,
    datasets: [
      {
        label: 'Filled',
        backgroundColor: datapoints.map((v) => {
          return v > 0 ? upGradient : downGradient
        }),
        // borderColor: '#088d4e',
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
        grid: {
          color: '#3c4559',
          drawBorder: false,
          borderDash: [12, 12],
          // borderDashOffset: 2,
          borderDash(context: any) {
            if (context.tick.value) return 0

            return [12, 12]
          },
          color(context: any) {
            if (context.tick.value) return '#3c4559'

            return '#fff'
          },
        },
      },
      x: {
        // display: false,
        ticks: {
          borderColor: '#3c4559',
          // display:false
        },
        grid: {
          display: false,
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
