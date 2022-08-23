<script lang="ts" setup>
import { Select as ASelect } from 'ant-design-vue'
import ChartJs from '@/components/ChartJs.vue'
const ASelectOption = ASelect.Option

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
        borderColor: '#088d4e',
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
    aspectRatio: 1,
    scales: {
      y: {
        // display: false,
        position: 'right',
        ticks: {
          borderColor: '#3c4559',
        },
        grid: {
          color: '#3c4559',
          drawBorder: false,
        },
      },
      x: {
        // display: false,
        ticks: {
          borderColor: '#3c4559',
        },
        grid: {
          color: '#3c4559',
          drawBorder: false,
        },
      },
    },
  },
}
</script>
<template>
  <div class="LineStatistic">
    <div class="LineStatistic-header">
      <div class="l">
        <a-select ref="select" value="Profit">
          <a-select-option value="Profit">Profit</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled" disabled>Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
      </div>
      <div class="r">
        <a-button size="small">24d</a-button>
        <a-button size="small">7d</a-button>
        <a-button size="small">30d</a-button>
        <a-button size="small">All</a-button>
      </div>
    </div>
    <div class="LineStatistic-content">
      <div class="chart">
        <ChartJs :conf="conf"></ChartJs>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.LineStatistic {
  background-color: #171e2d;
  border-radius: 4px;
  padding: 10px;
}

.LineStatistic-header {
  display: flex;
  margin-bottom: 5px;
  .l {
    flex: 1;
  }
  .r {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .ant-btn.active {
    color: #55a8e8;
    border-color: #55a8e8;
    background: transparent;
  }
}
.LineStatistic-content {
  position: relative;
  padding: 50%;
  .chart {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  canvas {
    height: 100%;
  }
}
</style>
