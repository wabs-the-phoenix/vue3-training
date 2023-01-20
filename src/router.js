import { createRouter, createWebHistory} from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ScrollApp from './pages/ScrollApp.vue';
import MarkDown from './pages/MarkDown.vue';

const routes = [
    { path: '/', component: HomePage},
    { path: '/scroll-app', component: ScrollApp},
    { path: '/mark-down', component: MarkDown}
];
const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;