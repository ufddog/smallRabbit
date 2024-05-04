import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {composables} from '@/composables/index.js'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from '@/router/index.js'
import './styles/common.scss'
import App from './App.vue'
import {imgLazy} from '@/directives/imgLazy';
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(imgLazy)
app.use(pinia)
app.use(router)
app.use(composables)
app.mount('#app')
