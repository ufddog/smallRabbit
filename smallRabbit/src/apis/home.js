import httpInstance from '@/utils/http.js' //有{}为引入按需导出 无{}为引入默认导出

export function getBannerApi(res={}){
   const{distributionSite='1'}=res
    return httpInstance({
     url:'home/banner',
     params:{
      distributionSite
     }

    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
      url:'/home/new'
    })
  }

  export const findHotAPI = () => {
    return httpInstance({
      url:'home/hot'
    })
  }
  
  export const getGoodsAPI = () => {
    return httpInstance({
      url: '/home/goods'
    })
  }