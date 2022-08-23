<script lang="ts" setup>
import ChartJs from '@/components/ChartJs.vue'
const datapoints = []

for (let i = 0; i < 20; i++) {
  datapoints.push(Math.random() * 200 - 60)
}

const conf = {
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
}
</script>
<template>
  <div style="display: inline-block; width: 90px; height: 30px">
    <ChartJs style="width: 100%; height: 100%" :conf="conf"></ChartJs>
  </div>
</template>
