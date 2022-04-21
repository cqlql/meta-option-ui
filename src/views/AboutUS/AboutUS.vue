<script lang="ts" setup>
import { ref } from 'vue'
import TabButtons from '@/components/TabButtons.vue'
import AboutUs from './comp/AboutUs.vue'
import NewsHeader from '../News/comp/NewsHeader.vue'

const list = [
  {
    label: 'About Us',
    value: 'AboutUs',
  },
  {
    label: 'FAQ',
    value: 'FAQ',
  },
  {
    label: 'Terms & conditions',
    value: 'TermsAndConditions',
  },
]

const tabVal = ref('AboutUs')
</script>
<template>
  <NewsHeader />
  <div class="mx-18 my-8 relative">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
    <AboutUs v-if="tabVal === 'AboutUs'"></AboutUs>
    <AboutUs v-else-if="tabVal === 'FAQ'"></AboutUs>
    <AboutUs v-else-if="tabVal === 'TermsAndConditions'"></AboutUs>
  </div>
</template>

<style lang="less" scoped>
.news-header {
  position: absolute;
  width: 100%;
  //   span {
  //     position: absolute;
  //     left: 62px;
  //     bottom: 112px;
  //     line-height: 1;
  //     font-size: 84px;
  //     font-weight: bold;
  //   }
}
</style>
