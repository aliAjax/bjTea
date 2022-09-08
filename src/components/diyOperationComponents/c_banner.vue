<template>
  <div class="c_banner">
    <div class="content">
      <p>内容设置</p>
      <div></div>
    </div>
    <div class="styleBox">
      <p>样式设置</p>
      <div>
        <el-color-picker v-model="color1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {reactive, toRefs} from "vue";

    export default {
      name:'c_banner',
      setup(){
        const state = reactive({
          color1:'#409EFF'
        })

        return {
          ...toRefs(state)
        }
      }
    }
</script>

<style scoped lang="scss">
    .c_banner{
      .content{

      }
      .styleBox{

      }
    }
</style>
