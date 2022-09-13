<template>
  <div class="diyComponents">
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="(item,index) in leftMenu" :title="item.title" :name="index" :key="index">
        <draggable
            class="dragArea"
            v-model="item.list"
            :group="{ name: 'people', pull: 'clone', put: false }"
            :clone="cloneDog"
            dragClass="dragClass"
            filter=".search , .navbar"
        >
          <template #item="{element}">
            <div
                class="list-group-item"
                @click="addDom(element)"
            >
              <div>
                <p>{{ element.name }}</p>
              </div>
            </div>
          </template>
        </draggable>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script lang="ts">
import {reactive, toRefs,onMounted} from "vue";
import draggable from "vuedraggable";
import bus from '@/ulits/bus.ts'
import diyDefaultData from '@/ulits/diyData/index'
  export default {
    name:'DiyComponents',
    components:{
      draggable
    },
    setup(props,{emit}){
      const state=reactive({
        data:[],
        leftMenu:[],
        activeNames:[0,1,2],
        diyDefaultData
      })

      const initData = () =>{
        const leftMenu = [
          {
            title: "基础组件",
            list: [],
            isOpen: true,
          },
          {
            title: "营销组件",
            list: [],
            isOpen: true,
          },
          {
            title: "工具组件",
            list: [],
            isOpen: true,
          }
        ]
        leftMenu.forEach(i=>{
          i.list.push({
            name:'轮播图',
            c_name:'c_swiper',
            id:5,
            imgUrl:''
          },{
            name:'图片魔方',
            c_name:'c_imgBox',
            id:6,
            imgUrl:'',
          },{
            name:'商品',
            c_name:'c_product',
            imgUrl:'',
            id:7,
          },)
        })
        state.leftMenu = leftMenu
      }

      const cloneDog = (data) => {
        // this.mConfig.push(tempItem)
        return {
          ...data,
        };
      }

      const addDom =(el)=>{
        // 增加节点方法
        const id = "id"+ new Date().getTime()
        const tmp = JSON.parse(JSON.stringify(state.diyDefaultData[el.c_name]))
        tmp.id=id
        emit('addDom', tmp)
        bus.emit('addDom', tmp)
        bus.emit('chooseComponents', tmp)
      }

      onMounted(()=>{
        initData()
      })

      return {
        cloneDog,
        addDom,
        ...toRefs(state)
      }
    }
  }
</script>
<style lang="scss" scoped>
.diy-components{
  .dragClass {
    background-color: #fff;
  }
  .dragArea{
    display: flex;
    flex-wrap: wrap;
    padding-top: 5px;
    padding-left: 5px;
    .list-group-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 74px;
      height: 66px;
      margin-right: 17px;
      margin-bottom: 10px;
      font-size: 12px;
      color: #666;
      cursor: pointer;
      border-radius: 5px;
      text-align: center;

      &:hover {
        box-shadow: 0 0 5px 0 rgba(24, 144, 255, 0.3);
        border-right: 5px;
        transform: scale(1.1);
        transition: all 0.2s;
      }

      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
}
</style>
