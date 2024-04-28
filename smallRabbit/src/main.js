import { createApp } from 'vue'
import{createPinia} from "pinia"
import { createRouter,createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

const route=[
    
]



const router=createRouter({
  route:route,
  history:createWebHashHistory()
})
const pinia=createPinia()

const app=createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
