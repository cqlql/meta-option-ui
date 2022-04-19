<script lang="ts" setup>
import PageLayout from './page/PageLayout.vue'
import NavMain from './NavMain.vue'
import HeaderLayout from './HeaderLayout.vue'
</script>
<template>
  <section class="layout">
    <header class="layout-header"> <HeaderLayout> </HeaderLayout></header>
    <section class="layout-content">
      <aside class="layout-aside"> <NavMain></NavMain> </aside>
      <main class="layout-main">
        <PageLayout></PageLayout>
      </main>
    </section>
  </section>
</template>

<style lang="less" scoped>
@minWidth: 1024px;

.layout {
  height: 100%;
}

.layout-header {
  height: 60px;
  background-color: #171e2d;
  min-width: @minWidth;
}

.layout-content {
  position: fixed;
  left: 0;
  top: 60px;
  right: 0;
  bottom: 0;
  // height: calc(100% - 60px);
  display: flex;
  min-width: @minWidth;
}

.layout-aside {
  width: 83px;
  background-color: #171e2d;
}

.layout-main {
  position: relative;
  height: 100%;
  flex: 1;
  overflow: auto;
  background-color: #262d3d;

  // & > .wrap {
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  // }
}
</style>
