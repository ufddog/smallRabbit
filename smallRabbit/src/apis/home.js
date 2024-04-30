import httpInstance from '@/utils/http.js' //有{}为引入按需导出 无{}为引入默认导出

export function getBannerApi(){

    return httpInstance({
     url:'home/banner'

    })
}