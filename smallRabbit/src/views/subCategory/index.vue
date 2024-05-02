<script setup>
import { onBeforeUpdate, onMounted,ref ,watch} from 'vue';
import { getCategoryFilterAPI,getSubCategoryAPI } from '../../apis/category';
import { useRoute,onBeforeRouteUpdate} from 'vue-router';
import GoodsItem from '../Home/components/GoodsItem.vue';
const route=useRoute()
const categoryData=ref({})
const getCategoryFilter=async()=>{
 const res = await getCategoryFilterAPI(route.params.id)
 console.log(res);
categoryData.value=res.result
}
onMounted(()=>{
  getCategoryFilter()
})

const categoryList=ref([])
const resData=ref({ 
     categoryId: route.params.id,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime'
   } )
const getSubCategory=async()=>{
const res =await getSubCategoryAPI(resData.value)
console.log('goods',res);
categoryList.value=res.result.items

}
onMounted(()=>{
  getSubCategory()
})

const tabChange=()=>{
  console.log(resData.value.sortField);
  resData.value.page=1
  disabled.value=false
  getSubCategory();
}

const disabled=ref(false)
const load= async ()=>{
resData.value.page++
const res =await getSubCategoryAPI(resData.value)
if(res.result.items.length===0)
{ disabled.value=true}
else{
categoryList.value=[...categoryList.value,...res.result.items] //展开运算符拼接
}
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="`/category/${categoryData.parentId}`">{{ categoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{categoryData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="resData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load"  :infinite-scroll-disabled="disabled">
        <GoodsItem v-for="good in categoryList" :good=good :key=good.id  />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
