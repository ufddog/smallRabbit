<script setup>
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNew from './components/HomeNew.vue'
import HomeProduct from './components/HomeProduct.vue'
</script>
<template>
    <div class="container">
        <home-category></home-category>
        <home-banner></home-banner>
    </div>
    <home-new></home-new>
    <home-hot></home-hot>
    <home-product></home-product>
</template>
<style>
</style>