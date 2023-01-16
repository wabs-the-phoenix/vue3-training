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
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
