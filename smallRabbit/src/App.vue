<script setup>
import { onMounted } from 'vue';
import{useCounterStore} from './store.js'
import { storeToRefs } from 'pinia';

const counterStore=useCounterStore()

const {counter,doubleCount}=storeToRefs(counterStore)

const{addCounter}=counterStore

onMounted(()=>{
 counterStore.getList()

})



</script>

<template>
  <div>{{ counter }}</div>
  <button @click="addCounter">加一</button>
  <div>{{ doubleCount }}</div>

<ul>
  <li v-for="item in counterStore.list" key="item.id">{{ item.name }}</li>
</ul>

</template>

<style scoped>

</style>
