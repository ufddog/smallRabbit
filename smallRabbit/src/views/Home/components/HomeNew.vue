<script setup>
import {ref} from 'vue'
import HomePanel from './HomePanel.vue'
const title=ref("新鲜好物")
const smallTitle=ref("新鲜出炉 goodgood")

</script>
<template>
  <home-panel :title=title  :smallTitle=smallTitle>
    <div>我是你爸</div>
  </home-panel>
</template>
<style>
</style>