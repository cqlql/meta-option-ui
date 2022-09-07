<script lang="ts" setup>
import ChartJs from '@/components/ChartJs.vue'
const datapoints: number[] = []

for (let i = 10; i--; ) {
  datapoints.push(~~(Math.random() * 100 - 50))
}
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
// const upGradient = ctx.createLinearGradient(0, 0, 0, 150)
// upGradient.addColorStop(0, 'rgb(6,159,83)')
// upGradient.addColorStop(1, 'rgba(6,159,83,0.5)')

// const downGradient = ctx.createLinearGradient(0, 150, 0, 300)
// downGradient.addColorStop(0, 'rgba(201,64,64,0.5)')
// downGradient.addColorStop(1, 'rgb(201,64,64)')
let max = Math.max(...datapoints)
let min = Math.abs(Math.min(...datapoints))

function getGradient(raw: number) {
  let height = 150
  if (raw > 0) {
    let elHeight = ~~((raw / max) * height)

    const upGradient = ctx.createLinearGradient(0, height - elHeight, 0, height)
    upGradient.addColorStop(0, 'rgb(6,159,83)')
    // upGradient.addColorStop(0.3, 'rgba(6,159,83,0.9)')
    upGradient.addColorStop(1, 'rgba(6,159,83,0.2)')
    return upGradient
  }

  let elHeight = ~~((Math.abs(raw) / min) * height)
  const downGradient = ctx.createLinearGradient(0, height, 0, height + elHeight)
  downGradient.addColorStop(0, 'rgba(201,64,64,0.2)')
  // downGradient.addColorStop(0.8, 'rgba(201,64,64,0.8)')
  downGradient.addColorStop(1, 'rgb(201,64,64)')
  return downGradient
}

const conf = {
  type: 'bar',
  data: {
    labels: datapoints,
    datasets: [
      {
        label: 'Filled',
        backgroundColor: datapoints.map(getGradient),
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
    barPercentage: 0.2, // 比例值
    maintainAspectRatio: false,
    scales: {
      y: {
        // display: false,
        position: 'right',
        grid: {
          drawBorder: false,
          // borderDash: [12, 12],
          // borderDashOffset: 2,
          borderDash(context: any) {
            if (context.tick.value) return 0

            return [12, 12]
          },
          color(context: any) {
            if (context.tick.value) return '#3c4559'

            return '#ccc'
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
  <div class="ProfitabilityStatistic">
    <div class="ProfitabilityStatistic-header">
      <div class="l"> Profitability </div>
      <div class="r">
        <a-button>By days</a-button>
        <a-button class="active">By month</a-button>
      </div>
    </div>
    <div class="ProfitabilityStatistic-content">
      <div class="chart">
        <ChartJs :conf="conf"></ChartJs>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ProfitabilityStatistic {
  background-color: #171e2d;
  border-radius: 4px;
  padding: 10px;
}

.ProfitabilityStatistic-header {
  display: flex;
  margin-bottom: 5px;
  .l {
    flex: 1;
    color: #898e9e;
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
.ProfitabilityStatistic-content {
  position: relative;
  // padding: 15%;
  height: 300px;
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
