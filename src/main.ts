import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/doc',
            name: 'Doc',
            component: Doc
        }
    ]
})

createApp(App).use(router).mount('#app')


