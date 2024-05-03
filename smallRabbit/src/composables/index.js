import imgDetail from "./imgDetail/imgDetail.vue"
import XtxSku from './XtxSku/index.vue'



export const composables={
install(app){
app.component('imgDetail',imgDetail)
app.component('XtxSku',XtxSku)


}

}