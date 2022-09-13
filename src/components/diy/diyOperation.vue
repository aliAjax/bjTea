<template>
  <div class="diyOperation">
    <div class="title">
      <diyDivider />
      <div class="title-name">{{data.cnName}}</div>
    </div>
    <component :is="data.name"/>
  </div>
</template>

<script lang="ts">

import {onMounted, reactive, toRefs} from "vue";
import bus from "@/ulits/bus";
import diyDivider from "@/components/diy/diyDivider.vue"
import diyModules from "@/components/diyOperationComponents/index.ts"

export default {
  name:'DiyOperation',
  components:{
    diyDivider,
    ...diyModules
  },
  setup(){
    const state = reactive({
      data:{
        name:'c_swiper',
        cnName:'轮播图'
      }
    })

    onMounted(()=>{
      bus.on('chooseComponents', e => {
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
  padding: 0 10px;
  .title{
    font-weight: bold;
    font-size: 16px;
    color: #333333;
    display: flex;
    align-items: center;
    &-name{
      display: inline-block;
      margin-left: 8px;
    }
  }
}
</style>