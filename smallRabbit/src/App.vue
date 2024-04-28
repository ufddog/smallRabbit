<script setup>
import { onMounted } from 'vue';
import{useCounterStore} from './store.js'
import { storeToRefs } from 'pinia';
import HelloWorld from '@/views/HelloWorld.vue';


const counterStore=useCounterStore()

const {counter,doubleCount}=storeToRefs(counterStore)

const{addCounter}=counterStore

onMounted(()=>{
 counterStore.getList()

})



</script>

<template>
  <hello-world></hello-world>
  <div>{{ counter }}</div>
  <el-button type="primary" @click="addCounter">加一</el-button>
  <div>{{ doubleCount }}</div>

<ul>
  <li v-for="item in counterStore.list" key="item.id">{{ item.name }}</li>
</ul>

</template>

<style scoped>

</style>
