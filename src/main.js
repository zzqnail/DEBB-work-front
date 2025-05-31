import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import MainPagevue from './pages/MainPage.vue'
import AuthPagevue from './pages/AuthPage.vue'
import PrimeVue from 'primevue/config';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {   path: '/', 
            name: 'MainPage', 
            component: MainPagevue 
        },
        {   path: '/login', 
            name: 'AuthPage', 
            component: AuthPagevue 
        }
    ]


})


createApp(App).use(router).use(PrimeVue).mount('#app')
