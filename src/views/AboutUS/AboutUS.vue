<script lang="ts" setup>
import { ref } from 'vue'
import TabButtons from '@/components/TabButtons.vue'
import AboutUs from './comp/AboutUs.vue'
import NewsHeader from '../News/comp/NewsHeader.vue'
import FAQView from './comp/FAQView.vue'
import TermsAndConditions from './comp/TermsAndConditions.vue'

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
  <NewsHeader v-if="tabVal === 'AboutUs'" />
  <div class="mx-18 my-8 relative z-10">
    <TabButtons :list="list" v-model="tabVal"> </TabButtons>
    <div>
      <AboutUs v-if="tabVal === 'AboutUs'"></AboutUs>
      <FAQView v-else-if="tabVal === 'FAQ'"></FAQView>
      <TermsAndConditions
        v-else-if="tabVal === 'TermsAndConditions'"
      ></TermsAndConditions>
    </div>
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
