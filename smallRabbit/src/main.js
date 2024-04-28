import { createApp } from 'vue'
import router from '@/router/index.js'
import './styles/common.scss'
import App from './App.vue'
import { getCategory }from '@/apis/testAPI.js'
//测试接口函数
getCategory().then(res=>{
  console.log(res)

})



const app = createApp(App)

app.use(router)
app.mount('#app')
