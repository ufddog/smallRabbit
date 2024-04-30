<script setup>
import {ref} from 'vue'
import HomePanel from './HomePanel.vue'
const title=ref("人气推荐")
const smallTitle=ref("多人选择 品质靠谱")

</script>
<template>
     <home-panel :title=title  :smallTitle=smallTitle>
     <div>我是你爹</div>
     
     </home-panel>
</template>
<style>
</style>