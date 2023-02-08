<template>
  <HeaderApp/>
  <router-view></router-view>
</template>

<script>
import HeaderApp from './layouts/HeaderApp.vue';
export default {
  name: 'App',
  components: {
    HeaderApp,
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
