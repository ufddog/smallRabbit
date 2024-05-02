import { onMounted, ref} from 'vue'
import {getCategoryApi} from '@/apis/category'
import { onBeforeRouteUpdate,useRoute } from 'vue-router';


export  function useCategory(){


    const route=useRoute()
    const categoryList=ref({})
    const getCategory= async (id=route.params.id)=>{
    const res=await getCategoryApi(id)
    console.log(res);
    categoryList.value=res.result
    }
    
    onMounted(()=>{
    getCategory()
    })
    
    onBeforeRouteUpdate((to)=>{
      getCategory(to.params.id)
    })

return{
    categoryList,
}
} 