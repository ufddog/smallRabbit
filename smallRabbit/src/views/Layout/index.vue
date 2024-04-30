<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue';
import { useCategoryStore } from '../../store';
import { onMounted } from 'vue';

const useCategory=useCategoryStore()

onMounted(()=>{
    useCategory.getCategory()
})
</script>
<template>
 <layout-fixed></layout-fixed>   
<layout-nav></layout-nav>
<layout-header></layout-header>
<router-view></router-view> 
<layout-footer></layout-footer>

   
</template>
<style>
</style>