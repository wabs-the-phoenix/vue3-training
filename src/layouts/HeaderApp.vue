<template>
  <header>
    <nav class="container">
        <router-link v-for="item in items" 
        :key="item.to" :to="item.to"
        class="nav-link">{{ item.title }}</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Acceuil', to: '/'},
        { title: 'MarkDown', to: 'mark-down'}
      ]
    }
  }
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