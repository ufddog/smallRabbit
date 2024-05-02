<script setup>
import {fetchHotGoodsAPI} from '@/apis/detail.js'
import { computed, onMounted ,ref,defineProps} from 'vue';
import { useRoute } from 'vue-router';

const props=defineProps({
hotType:{
   type:Number
}

})

const title=computed(()=>{
  return props.hotType===1?'24小时热榜':'周热榜'

})
console.log('title',title);


const route= useRoute()
const hotData=ref({
 id:route.params.id,
 type:props.hotType,
 Limit :3

})
const hotGoodsList=ref([])
const fetchHotGoods =async()=>{
 const res =await fetchHotGoodsAPI(hotData.value)
console.log('hot',res);
hotGoodsList.value=res.result


}
onMounted(()=>{
fetchHotGoods()

})
</script> 


<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotGoodsList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{item.desc}}</p>
      <p class="price">&yen;{{item.price}}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>