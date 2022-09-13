<template>
  <div class="c_swiper">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="内容设置" name="content">
        <draggable
            tag="ul"
            :list="list"
            class="list-group"
            handle=".handle"
            item-key="name"
        >
          <template #item="{ element, index }">
            <div class="list-group-item">
              <div class="handle" style="width: 5px;height: 5px;background: red;display: inline-block"></div>

              <span class="text">{{ element.name }} </span>
            </div>
          </template>
        </draggable>
      </el-tab-pane>
      <el-tab-pane label="样式设置" name="styleBox">Config</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import {reactive, toRefs} from "vue";
import draggable from "vuedraggable";
    export default {
      name:'c_swiper',
      components:{
        draggable
      },
      setup(){
        const state = reactive({
          color1:'#409EFF',
          activeName:'content',
          list: [
            { name: "John", text: "", id: 0 },
            { name: "Joao", text: "", id: 1 },
            { name: "Jean", text: "", id: 2 }
          ],
        })

        const handleClick = () =>{

        }

        return {
          handleClick,
          ...toRefs(state)
        }
      }
    }
</script>

<style scoped lang="scss">
    .c_swiper{
      .content{

      }
      .styleBox{

      }
      .list-group{
        padding-left: 0;
        &-item{
          display: flex;
          align-items: center;
        }
      }
    }
</style>
