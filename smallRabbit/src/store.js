import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { getCategoryApi } from "./apis/layoutAPI";
import {getUserApi} from '@/apis/user.js'

export const useCategoryStore=defineStore('Category',()=>{

const categoryList=ref([])
const getCategory=async ()=>{
  const res= await getCategoryApi()
  console.log(res)
  categoryList.value=res.result
}
return { categoryList,getCategory}

})

export const useUserStore=defineStore('user',()=>{

  const userInfo=ref({})
const getUser=async ({account,password})=>{
  const res =await getUserApi({account,password})
  userInfo.value=res.result
}
return{
  userInfo,getUser}
},
{
  persist: true,
}
)