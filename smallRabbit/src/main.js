import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index.js'
import './styles/common.scss'
import App from './App.vue'
import {imgLazy} from '@/directives/imgLazy';
const pinia=createPinia()
const app = createApp(App)
app.use(imgLazy)
app.use(pinia)
app.use(router)
app.mount('#app')
