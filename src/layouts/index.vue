<script lang="ts" setup>
import PageLayout from './page/PageLayout.vue'
import { Layout } from 'ant-design-vue'
</script>
<template>
  <!-- <div class="layout"> div.layout-header </div> -->

  <div>
    <Layout>
      <Layout.Header>header</Layout.Header>
      <Layout>
        <Layout.Sider>left sidebar</Layout.Sider>
        <Layout.Content> <PageLayout></PageLayout></Layout.Content>
      </Layout>
      <Layout.Footer>footer</Layout.Footer>
    </Layout>
  </div>
</template>

<style lang="scss" scoped></style>
