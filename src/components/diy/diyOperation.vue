<template>
  <div class="diyOperation">
    <div class="title">{{data.name}}</div>
    <div class="operation">
      <div class="content-box">
        <p>内容设置</p>
      </div>
      <div class="style-box">
        <p>样式设置</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {onMounted, reactive, toRefs} from "vue";
import bus from "@/ulits/bus";

export default {
  name:'DiyOperation',
  setup(){
    const state = reactive({
      data:{}
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