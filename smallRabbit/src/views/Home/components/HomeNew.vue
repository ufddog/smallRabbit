<script setup>

import {findNewAPI} from '@/apis/home.js'
import {ref,onMounted} from 'vue'
import HomePanel from './HomePanel.vue'
const title=ref("新鲜好物")
const smallTitle=ref("新鲜出炉 goodgood")
const newList=ref([])
const getFindNew=async ()=>{
const res=await findNewAPI()
console.log(res);
 newList.value=res.result
}

onMounted(()=>{
  getFindNew()
})

</script>
<template>
  <home-panel :title=title  :smallTitle=smallTitle>
    <ul class="goods-list">
        <li v-for="item in newList" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
      </ul>
  </home-panel>
</template>



<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>