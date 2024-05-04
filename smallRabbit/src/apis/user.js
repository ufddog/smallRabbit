import httpInstance from '@/utils/http.js'


export const getUserApi=({account,password})=>{
 return httpInstance({
    url:'/login',
    method:'POST',
    data:{
        account,password
    }

 })


}