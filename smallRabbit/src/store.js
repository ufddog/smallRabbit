import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from 'axios'
const API_URL='http://geek.itheima.net/v1_0/channels'

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