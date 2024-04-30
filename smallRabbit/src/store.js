import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { getCategoryApi } from "./apis/layoutAPI";

export const useCategoryStore=defineStore('Category',()=>{

const categoryList=ref([])
const getCategory=async ()=>{
  const res= await getCategoryApi()
  console.log(res)
  categoryList.value=res.result
}
return { categoryList,getCategory}

})

export const useCounterStore=defineStore('counter',()=>{
  
const counter=ref(0)

function addCounter(){
   counter.value++

}
 const doubleCount=computed(()=>{
  return counter.value*2 })

 const list=ref([])

 const getList=async()=>{
 const res= await axios.get(API_URL)
 list.value=res.data.data.channels

  }

 


return{counter,addCounter,doubleCount,getList,list}

})