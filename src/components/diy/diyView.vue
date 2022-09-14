<template>
  <div class="diyView">
    <draggable
        class="dragArea"
        v-model="mConfig"
        group="people"
        @change="log"
        item-key="id"
    >
      <template #item="{ element,index }">
        <div class="list-group-item" :class="{'choose-item':currentIndex === index}" @click="chooseItem(element,index)">
          <div class="delete-box" v-if="index ===currentIndex">
            <el-button class="icon-copy" @click.stop="copyItem(index)">cp</el-button>
            <el-button class="icon-del" @click.stop="deleteItem(index)">dl</el-button>
            <el-button class="icon-up" :disabled="index === 0" @click.stop="moveOp(index,-1)">up</el-button>
            <el-button class="icon-down" :disabled="index === mConfig.length-1" @click.stop="moveOp(index,1)">dw</el-button>
          </div>
          {{ element.cnName }}
        </div>
      </template>
    </draggable>
  </div>
</template>
<script lang="ts">

import draggable from "vuedraggable";
import {reactive, toRefs} from "vue";

export default {
  name:'DiyView',
  components:{
    draggable
  },
  props:["viewData","currentIndex"],
  setup(props,{emit}){
    const state = reactive({
      mConfig:props.viewData,
    })

    const {currentIndex} = toRefs(props)

    const change = () =>{

    }

    const onMove = () =>{

    }

    const copyItem = (index) =>{
      const copy = JSON.parse(JSON.stringify(state.mConfig[index]))
      state.mConfig.splice(index,0,copy)
    }

    const chooseItem = (el,index) =>{
        emit('changeIndex',index)
    }

    const deleteItem = (index) =>{
      state.mConfig.splice(index,1)
      if(state.mConfig.length !== 0){
        if(state.mConfig[index]){
          emit('changeIndex',index)
        }else{
          emit('changeIndex',index-1)
        }
      }else{
        emit('changeIndex',index)
      }
    }

    const moveOp = (index,type) =>{
      const mConfig = JSON.parse(JSON.stringify(state.mConfig))
      const item = mConfig.splice(index,1)
      mConfig.splice(index+type,0,item[0])
      state.mConfig = mConfig
      emit('changeIndex',index+type)
    }

    const log = (evt) => {
      emit('changeIndex',evt.moved.newIndex)
    }

    return {
      change,
      onMove,
      copyItem,
      chooseItem,
      deleteItem,
      moveOp,
      log,
      currentIndex,
      ...toRefs(state)
    }
  }
}

</script>
<style scoped lang="scss">
.diyView{
  width: 375px;
  height: 600px;
  border: 1px solid black;
  .dragArea{
    background: #ffffff;
    height: 100%;
    .list-group-item {
      position: relative;
      background: #f0f2f5;
      margin-bottom: 2px;
      padding: 0 10px 10px;
      cursor: move;
      .delete-box{
        position: absolute;
        right: -43px;
        top: 0;
        width: 36px;
        height: 143px;
        border-radius: 4px;
        cursor: pointer;
        color: #ffffff;
        font-weight: 700;
        text-align: center;
        padding: 4px 0;
        background: #1890ff;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        :deep .el-button{
          margin-left: unset;
        }
        >div{
          width: 100%;
          display: inline-block;
          border:1px solid black;
        }
      }
    }
    .choose-item{
      background: red;
      border: 2px solid #1890ff;
      box-shadow: 0 0 10px 0 rgb(24 144 255 / 30%);
    }
  }
}
</style>