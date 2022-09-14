<template>
  <div class="diyOperation">
    <div class="title">
      <diyDivider />
      <div class="title-name">{{operationData.cnName}}</div>
    </div>
    <component :is="operationData.name" :formData="operationData"/>
  </div>
</template>

<script lang="ts">

import {toRefs} from "vue";
import diyDivider from "@/components/diy/diyDivider.vue"
import diyModules from "@/components/diyOperationComponents/index.ts"

export default {
  name:'DiyOperation',
  components:{
    diyDivider,
    ...diyModules
  },
  props:['operationData'],
  setup(props){
    const {operationData} = toRefs(props)
    return {
      operationData
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