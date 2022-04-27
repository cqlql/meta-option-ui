<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
</script>
<template>
  <div class="IndicatorsParams">
    <table>
      <tbody>
        <tr>
          <td>Moving average</td>
          <td>
            <span class="list-indicator-params">
              <span style="border-left-color: rgb(240, 197, 47)" class="param">
                SMA
              </span>
              <span class="param"><i>P</i>14</span>
              <span class="param"><i>W</i>2</span>
            </span>
          </td>
        </tr>
        <tr>
          <td>MACD</td>
          <td>
            <span class="list-indicator-params"
              ><span class="param"><i>P</i>12</span
              ><span class="param"><i>P</i>26</span
              ><span class="param"><i>P</i>9</span><i class="spacer"></i
              ><span class="param" style="border-left-color: rgb(45, 127, 183)"
                ><i>W</i>1</span
              ><span style="border-left-color: rgb(230, 80, 67)" class="param"
                ><i>W</i>1</span
              ></span
            >
          </td>
          <td>
            <Icon class="remove" icon="ic:baseline-close"></Icon>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="less" scoped>
.IndicatorsParams {
  .remove {
    color: #c6413a;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      color: #ee6962;
    }
  }
  // =================================
  // ==============table==========
  // =================================
  table {
    width: 100%;

    td {
      height: 45px;
      border-bottom: 1px solid #2d384a;
    }

    td:first-child {
      padding-left: 30px;
    }
  }

  // =================================
  // ==============list-indicator-params==========
  // =================================
  .list-indicator-params {
    display: flex;

    .param {
      display: inline-block;
      padding: 2px 6px;
      font-size: 11px;
      border: 1px solid hsla(0, 0%, 100%, 0.08);
      border-radius: 2px;
      min-width: 1.3ex;
      margin-right: 2px;

      i {
        font-style: normal;
        opacity: 0.5;
        margin-right: 0.25ex;
        font-weight: 100;
      }
    }

    .spacer {
      width: 12px;
    }
  }
}
</style>
