<template>
  <HeaderApp @on-open-Modal="isModalOpen = true"/>
  <router-view></router-view>
  <LoginModal v-if="isModalOpen" @on-close-modal="isModalOpen = false"/>
</template>

<script>
import HeaderApp from './layouts/HeaderApp.vue';
import LoginModal from './components/LoginModal.vue';
export default {
  name: 'App',
  components: {
    HeaderApp,
    LoginModal,
  },
  data() {
    return {
      isModalOpen: false
    }
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
