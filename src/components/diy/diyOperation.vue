<template>
  <div class="diyOperation">
    <div class="title">{{data.name}}</div>
    <component :is="data.c_name"/>
<!--    <div class="operation">-->
<!--      <div class="content-box">-->
<!--        <p>内容设置</p>-->
<!--      </div>-->
<!--      <div class="style-box">-->
<!--        <p>样式设置</p>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script lang="ts">

import {onMounted, reactive, toRefs} from "vue";
import bus from "@/ulits/bus";
import diyModules from "@/components/diyOperationComponents/index.ts"

export default {
  name:'DiyOperation',
  components:{
    ...diyModules
  },
  setup(){
    const state = reactive({
      data:{
        name:'轮播图',
        c_name:'c_banner'
      }
    })

    onMounted(()=>{
      bus.on('chooseComponents', e => {
        console.log('e', e)
        state.data = e
      })
    })

    return {
      ...toRefs(state)
    }
  }
}

</script>

<style scoped lang="scss">
.diyOperation{

}
</style>