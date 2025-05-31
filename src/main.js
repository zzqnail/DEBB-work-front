import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import MainPagevue from '../pages/MainPage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {   path: '/', 
            name: 'MainPage', 
            component: MainPagevue 
        }]

})


createApp(App).use(router).mount('#app')
