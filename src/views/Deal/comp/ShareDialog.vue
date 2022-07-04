<script lang="ts" setup>
import { copyTextToClipboard } from '@/hooks/web/useCopyToClipboard'
import { message, Modal as AModal } from 'ant-design-vue'

function copy() {
  if (copyTextToClipboard('https://github.com')) {
    message.success('Copy Success')
  }
}
</script>
<template>
  <a-modal width="360px" :footer="false" v-bind="$attrs">
    <div class="s-logo">
      <img src="@/assets/logo/logo.png" />
    </div>
    <div class="qr">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQAQAAAACoxAthAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAd2KE6QAAAAJcEhZcwAAFxEAABcRAcom8z8AAAI/SURBVHja7ds7koMwDIBhZbagzBE4CkcLR+MoOQIlRQatbVnYJDuT4GxS/S72YfioNJJlg+jhIRAIBPIyuck2zhp+XBaRH51EhlXkFG+ayx0DBNJCBg+4c/q1pGvpSb0ayTfcIJDvkdUu1ySOEMZrnAskzV0gkPeJ3RuuxYR50mvOlhDIv5Fw+eJpLoTlVV6IZAjkOanKq5E0N4XHxIc9q8gQyCfINs5RjZ2OIVV6tpzlWf8CgTwh++FhWT3mbkAgDWS1HLcLS0kVOa76TIXpLfVBIAfJ5HVUd52FlsdIF5vaCwTyRVJCNkbtUhZ+1vD6GAUCaSG3vENnLcRWkauwtFDVmEQVAmkhQ6rI26aKbQ6notxr7iy6EpwQyHeIxk098cbEzyyG9N+c/u7usiUEcojYxnFfVeTqzGKWx1UfBHKQWPxd8y7wmPKeau55rdv4I/VBIK8Szcs72a3wprTq69XCMqbDrm5GIJBPk8nbWq++sevwxaDkbDlCIK2kOnuthmfQEq0QSCvxzeHeVZd3T6qzV9vMg0C+Rqq0KF597YV2LbVayh4zBHKU7EY8rrVzsTLi/AKBtJP9KyZpczjunvjLnuKpzz6MgEBayFBiUraPv1KFtfLqYVmfi0Egnya7jybytVv+JnH2MO/uVn0QSBOxc9ZwTUpY5nOMJX9OAYG8RXL8/eRkqKu90mnT+2YEAjlASnm1MaZcN2h5q87O9/+syBDIR8g2zvn+3Ix4tpTHjTsI5AA5OiAQCOTF8QsXWEZBs8v7PQAAAABJRU5ErkJggg=="
        alt=""
      />
    </div>
    <div class="text">xxx</div>
    <div class="text">xxx xxx xxx</div>
    <div class="btn-wrap">
      <a-button @click="copy" type="primary" class="!block w-full" shape="round"
        >COPY</a-button
      >
    </div>
  </a-modal>
</template>

<style lang="less" scoped>
.s-logo {
  padding-top: 20px;

  img {
    width: 100px;
    margin: 0 auto;
  }
}

.qr {
  // text-align: center;

  padding: 10px 0 5px;

  img {
    width: 200px;
    margin: 0 auto;
  }
}

.text {
  padding-top: 5px;
  text-align: center;
}

.btn-wrap {
  text-align: center;
  padding-top: 15px;
}
</style>
