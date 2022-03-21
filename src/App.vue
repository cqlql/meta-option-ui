<template>
  <nav>
    <router-link to="/"><Icon icon="ep:home-filled"></Icon> Home</router-link> |
    <router-link to="/about"><Icon icon="ep:avatar"></Icon> About</router-link>
  </nav>
  
  <JSXDemo />
  <router-view />
</template>

<script lang="ts" setup>
import JSXDemo from './JSXDemo.vue'
import Icon from './components/Icon/src/Icon.vue';
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
