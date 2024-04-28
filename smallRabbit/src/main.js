import { createApp } from 'vue'
import { createPinia } from "pinia"
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import { getCategory }from '@/apis/testAPI.js'
//测试接口函数
getCategory().then(res=>{
  console.log(res)

})


const routes = [
  // 这里放置你的路由配置
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes // 正确配置路由数组
})

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
