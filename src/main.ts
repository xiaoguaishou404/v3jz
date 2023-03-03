import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Main from './components/Main.vue'



import { createRouter, createWebHashHistory } from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/w',
            name: 'Main',
            component: Main
        }
    ]
})

createApp(App).use(router).mount('#app')


