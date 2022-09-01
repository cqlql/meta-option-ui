<!-- <script lang="ts" setup></script> -->
<template>
  <div class="TableBoxOne"> <slot></slot> </div>
</template>

<style lang="less">
.TableBoxOne {
  position: relative;
  padding: 20px;
  background-color: #171e2d;

  .ant-table {
    overflow-x: auto;
    white-space: nowrap;

    .ant-table-cell::before {
      display: none !important;
    }

    th {
      color: #838898;
    }

    td {
      padding: 10px 16px;
    }

    tbody {
      background-color: #21293a;

      td {
        // border-color: #424b60 !important;
        // border-right: 1px solid #424b60 !important;
        border-bottom: 1px solid #424b60 !important;
      }

      tr:first-child {
        td {
          border-top: 1px solid #424b60 !important;
        }
      }

      tr {
        td:first-child {
          border-left: 1px solid #424b60 !important;
        }

        td:last-child {
          border-right: 1px solid #424b60 !important;
        }
      }
    }
  }
}
</style>
