<template>
  <div class="diy">
    <div class="diy-components">
      <el-tabs v-model="tabValue" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="组件库" name="components">
          <DiyComponents />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="diy-view">
      <DiyView />
    </div>
    <div class="diy-config">
      <DiyOperation />
    </div>
  </div>
</template>

<script lang="ts">
  import DiyComponents from '@/components/diy/diyComponents.vue'
  import DiyView from '@/components/diy/diyView.vue'
  import DiyOperation from '@/components/diy/diyOperation.vue'
  import {reactive, toRefs} from "vue";

  export default {
   name:'Diy',
    components:{
      DiyComponents,
      DiyView,
      DiyOperation
    },
   props:{
     // msg:{
     //   type:String,
     //   default:''
     // }
   },
    setup(){
      const state  = reactive({
        tabValue:'components'
      })

      const handleClick = () =>{
        // api need
      }

      return {
        handleClick,
        ...toRefs(state)
      }
    }
  }
</script>

<style scoped lang="scss">

.diy{
  display: flex;
  justify-content: space-between;
  background: #f0f2f5;
  &-components{
    height: 80vh;
    width: 300px;
    background: #ffffff;
  }
  &-view{
    display: flex;
    justify-content: center;
  }
  &-config{
    width: 400px;
    background: #ffffff;
  }
}

@media (min-width: 1024px) {
}
</style>
