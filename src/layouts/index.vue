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
        <div class="wrap">
          <PageLayout></PageLayout>
        </div>
      </main>
    </section>
  </section>
</template>

<style lang="less" scoped>
.layout {
  height: 100%;
}

.layout-header {
  height: 80px;
  background-color: #171e2d;
}

.layout-content {
  position: fixed;
  left: 0;
  top: 80px;
  right: 0;
  bottom: 0;
  // height: calc(100% - 80px);
  display: flex;
}

.layout-aside {
  width: 110px;
  background-color: #171e2d;
}

.layout-main {
  position: relative;
  height: 100%;
  flex: 1;
  overflow: auto;

  & > .wrap {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
