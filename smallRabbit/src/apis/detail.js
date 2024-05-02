import httpInstance from '@/utils/http.js'

export function getDetailApi(id){
    return httpInstance({
        url:'/goods',
        params:{id}
    })
    
}