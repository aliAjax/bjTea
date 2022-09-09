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
            <el-button class="icon-copy" @click="copyItem(index)">cp</el-button>
            <el-button class="icon-del" @click="deleteItem(index)">dl</el-button>
            <el-button class="icon-up" :disabled="index === 0" @click="moveOp(index,-1)">up</el-button>
            <el-button class="icon-down" :disabled="index === mConfig.length-1" @click="moveOp(index,1)">dw</el-button>
          </div>
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>
<script lang="ts">

import draggable from "vuedraggable";
import bus from "@/ulits/bus.ts"
import {onMounted, reactive, toRefs} from "vue";

export default {
  name:'DiyView',
  components:{
    draggable
  },
  setup(){
    const state = reactive({
      mConfig:[
        { name: "dog 1", id: 1 },
        { name: "dog 2", id: 2 },
        { name: "dog 3", id: 3 },
        { name: "dog 4", id: 4 }
      ],
      currentIndex:0
    })

    const change = () =>{

    }

    const onMove = () =>{

    }

    const copyItem = (index) =>{
      const copy = JSON.parse(JSON.stringify(state.mConfig[index]))
      state.mConfig.splice(index,0,copy)
    }

    const chooseItem = (el,index) =>{
        state.currentIndex = index
      bus.emit('chooseComponents', JSON.parse(JSON.stringify(el)))
    }

    const deleteItem = (index) =>{
      state.mConfig.splice(index,1)
      if(state.mConfig.length !== 0){
        if(state.mConfig[index]){
          bus.emit('chooseComponents', JSON.parse(JSON.stringify(state.mConfig[index])))
        }else{
          bus.emit('chooseComponents', JSON.parse(JSON.stringify(state.mConfig[index-1])))
        }
      }else{
        bus.emit('chooseComponents', null)
      }
    }

    const moveOp = (index,type) =>{
      const mConfig = JSON.parse(JSON.stringify(state.mConfig))
      const item = mConfig.splice(index,1)
      mConfig.splice(index+type,0,item[0])
      state.mConfig = mConfig
      state.currentIndex += type
    }

    const log = (evt) => {
      state.currentIndex = evt.moved.newIndex
    }

    onMounted(()=>{
      bus.on('addDom', e => {
        console.log('e', e)
        state.currentIndex = state.mConfig.length
        state.mConfig.push(e)
      })
    })

    return {
      change,
      onMove,
      copyItem,
      chooseItem,
      deleteItem,
      moveOp,
      log,
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