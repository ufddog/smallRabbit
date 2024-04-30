import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index.js'
import './styles/common.scss'
import App from './App.vue'
import { useIntersectionObserver } from '@vueuse/core'
const pinia=createPinia()
const app = createApp(App)
app.directive('img-lazy',{
mounted(el,binding){
   useIntersectionObserver(
    el,
    ([{ isIntersecting }]) => {
     if(isIntersecting ){
      el.src=binding.value
     }
    },
  )
}
})
app.use(pinia)
app.use(router)
app.mount('#app')
