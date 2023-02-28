<template>
  <header>
    <div class="container header-content">
      <nav>
        <router-link v-for="item in items" 
        :key="item.to" :to="item.to"
        class="nav-link">{{ item.title }}</router-link>
      </nav>
      <button class="modal-btn" type="button">Login</button>
    </div>
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
  .header-content {
    display: flex;
    justify-content: space-between;
  }

  .modal-btn {
    padding: 8px 12px;
    background-color: white;
    border-radius: 4px;
    color: #5555ff;
    border: 1px solid white;
  }

</style>