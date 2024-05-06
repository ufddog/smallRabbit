import { createRouter,createWebHashHistory } from "vue-router";
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import GoodsDetail from '@/views/Detail/index.vue'

const router=createRouter({

history:createWebHashHistory(),

routes:[
    {path:'/',component:Layout,
     children:[
        {path:'',//为空 会在“/”渲染的时候也进行渲染
        component:Home},
        {path:'category/:id',
        component:Category},
       {path:'subCategory/:id',
       component:SubCategory,},
       {path:'goodsDetail/:id',
       component:GoodsDetail,},
    
    
    ]  
},  
    {path:'/login',component:Login},
],
//路由切换回到顶部
scrollBehavior(){
    return {
        top :0,
        behavior:'smooth'
    }
}


})
export default router