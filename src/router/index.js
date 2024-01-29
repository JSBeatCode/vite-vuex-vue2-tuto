import { createRouter, createWebHistory } from 'vue-router';
import Module from '../pages/Module.vue'
import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/module',
        name: 'Module',
        component: Module
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;