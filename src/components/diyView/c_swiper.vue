<template>
  <div class="diy_view_c_swiper" :style="{background:viewData.bgColor.color[0].item}">
      <div :class="{'content':true}" :style="{paddingLeft: viewData.mbConfig.val + 10 + 'px',
          paddingRight: viewData.mbConfig.val + 10 + 'px'}">
        <div :class="{'imgBox':true,'content-fillet':viewData.imgConfig.type===1}" :style="{height:viewData.lrConfig.val+'px'}"></div>
        <div v-if="viewData.docConfig.type !==2" class="dot"
             :style="{
          paddingLeft: viewData.mbConfig.val + 16 + 'px',
          paddingRight: viewData.mbConfig.val + 16 + 'px',
          justifyContent:
            viewData.txtStyle.type === 'center'
              ? 'center'
              :  viewData.txtStyle.type === 'right'
              ? 'flex-end'
              : 'flex-start',
        }">
          <div :class="{'dot-item':true,'dot-item-rectangle':viewData.docConfig.type ===1}" :style="{ background: `${viewData.dotColor.color[0].item}` }"></div>
          <div :class="{'dot-item':true,'dot-item-rectangle':viewData.docConfig.type ===1}"></div>
          <div :class="{'dot-item':true,'dot-item-rectangle':viewData.docConfig.type ===1}"></div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import {ref, reactive, toRefs, onMounted} from "vue";
import defaultSwiperData from "@/ulits/diyData/swiper"
    export default {
      name:'c_swiper',
      props:{
        viewData:{
          type:Object,
          default:()=>{
            return JSON.parse(JSON.stringify(defaultSwiperData))
          }
        }
      },
      setup(props){
        const {viewData} = toRefs(props)
        return {
          viewData
        }
      }
    }
</script>

<style scoped lang="scss">
.diy_view_c_swiper{
  position: relative;
  .content{
    .imgBox{
      height: 172px;
      background: #f3f5f7;
    }
    .dot{
      position: absolute;
      bottom: 20px;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      &-item{
        width: 5px;
        height: 5px;
        background: #aaaaaa;
        border-radius: 50%;
        margin: 0 3px;
      }
      &-item-rectangle{
        width: 8px;
        border-radius: unset;
      }
    }
  }
  .content-fillet{
    border-radius: 6px;
  }
}
</style>
