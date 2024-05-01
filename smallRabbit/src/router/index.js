import { createRouter,createWebHashHistory } from "vue-router";
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
 


const router=createRouter({

history:createWebHashHistory(),

routes:[
    {path:'/',component:Layout,
     children:[
        {path:'',//为空 会在“/”渲染的时候也进行渲染
        component:Home},
        {path:'category/:id',
        component:Category},]  
},  
    {path:'/login',component:Login},
]
})
export default router