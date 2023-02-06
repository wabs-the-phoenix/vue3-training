<template>
  <header>
    <nav class="container">
        <router-link to="/" class="nav-link">Accueil</router-link>
        <router-link to="/mark-down" class="nav-link">Mark Down</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  .nav-link {
    color: white;
    text-decoration: none;
    margin-right: 30px;
  }
  .nav-link:hover {
    
  }
  header {
    background-color: #5555ff;
    padding: 20px 0;
  }
</style>