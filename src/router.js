import { createRouter, createWebHistory} from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ScrollApp from './pages/ScrollApp.vue';

const routes = [
    { path: '/', component: HomePage},
    { path: '/scroll-app', component: ScrollApp}
];
const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;