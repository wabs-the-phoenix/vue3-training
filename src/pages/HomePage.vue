<template>
    <div class="main container">
        <h1>Page d'accueil</h1>
        <div class="grid-3-col">
            <div v-for="app in applicationsList" :key="app.id" class="grid-card">
                <h4 class="app-title">{{ app.title }}</h4>
                <div class="description">
                    {{ app.description }}
                </div>
                <div class="mt-2 card-bottom">
                    <router-link to="/mark-down" class="app-link">Voir...</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            applicationsList: [
                {
                    id: '1',
                    title: 'Application de mark down',
                    description: `it's an application that transform a mark-down text in to an html code`
                }
            ]
        }
    }
}
</script>

<style>
    .main {
        color: #2c3e50;
        margin-top: 60px;
        }
    .container {
        padding: 0 200px;
    }
    .grid-3-col {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);
    }
    .grid-card {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px;
    }
    .app-title {
        margin-top: 0;
    }
    .app-link {
        padding: 8px 12px;
        background-color: #2c3e50;
        margin-top: 40px;
        color: white;
        text-decoration: none;
        border-radius: 4px;
    }
    .mt-2 {
        margin-top: 20px;
    }
</style>