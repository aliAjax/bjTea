<template>
  <div class="c_swiper">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-form
          ref="formRef"
          :model="dynamicValidateForm"
          label-width="85px"
          class="c_swiper-form"
      >
        <el-tab-pane label="内容设置" name="content">
          <draggable
              tag="ul"
              :list="formData.swiperConfig.list"
              class="list-group"
              handle=".handle"
              item-key="name"
          >
            <template #item="{ element, index }">
              <div class="list-group-item">
                <div class="handle">
                  <img src="@/assets/diy/c_swiper/move.png" alt="">
                </div>
                <div class="operation">
                  <el-upload
                      class="avatar-uploader"
                      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload"
                  >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">+</el-icon>
                  </el-upload>
                  <el-form-item
                      style="margin-top: 12px;"
                      :label="element.info[0].title"
                  >
                    <el-input v-model="element.info[0].value" :placeholder="element.info[0].tips"/>
                  </el-form-item>
                  <el-form-item
                      :label="element.info[1].title"
                  >
                    <el-input v-model="element.info[1].value" :placeholder="element.info[1].tips"/>
                  </el-form-item>
                  <el-form-item
                      :label="element.info[2].title"
                  >
                    <el-config-provider :locale="locale">
                      <el-date-picker
                          v-model="element.info[2].value"
                          type="datetimerange"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                      />
                    </el-config-provider>
                  </el-form-item>
                </div>
                <span class="text">{{ element.name }} </span>
              </div>
            </template>
          </draggable>
          <p><span @click="addInfo">+ 添加图片</span></p>
        </el-tab-pane>
        <el-tab-pane label="样式设置" name="styleBox">
          <el-form-item  :label="formData.imgConfig.title" label-width="110px">
            <img @click="changeImgConfig(0)" src="@/assets/diy/c_swiper/fillet.png" alt="fillet" style="width: 24px;margin-right: 8px;cursor: pointer">
            <img @click="changeImgConfig(1)" src="@/assets/diy/c_swiper/right_angle.png" alt="right_angle" style="width: 24px;cursor: pointer;margin-right: 28px;">
            <span style="color:#333333">{{formData.imgConfig.type===1?'圆角':'直角'}}</span>
          </el-form-item>
          <el-form-item  :label="formData.docConfig.title" label-width="110px">
            <el-radio-group v-model="formData.docConfig.type" class="ml-4">
              <el-radio v-for="(item,index) in formData.docConfig.list" :label="index" size="large">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item  :label="formData.txtStyle.title" label-width="110px">
            <el-radio-group v-model="formData.txtStyle.type" class="ml-4">
              <el-radio v-for="item in formData.txtStyle.list" :label="item.val" size="large">{{item.text}}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item  :label="formData.dotColor.title" label-width="110px">
            <el-color-picker v-for="i in formData.dotColor.color" v-model="i.item" />
          </el-form-item>
          <el-form-item  :label="formData.bgColor.title" label-width="110px">
            <el-color-picker v-for="i in formData.bgColor.color" v-model="i.item" />
          </el-form-item>
          <el-form-item  :label="formData.lrConfig.title" label-width="110px">
            <el-slider v-model="formData.lrConfig.val" show-input />
          </el-form-item>
          <el-form-item  :label="formData.mbConfig.title" label-width="110px">
            <el-slider v-model="formData.mbConfig.val" show-input />
          </el-form-item>
        </el-tab-pane>
      </el-form>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import {ref, reactive, toRefs, onMounted} from "vue";
import draggable from "vuedraggable";
import defaultSwiperData from "@/ulits/diyData/swiper"
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import type { UploadProps } from 'element-plus'
    export default {
      name:'c_swiper',
      components:{
        draggable
      },
      props:{
        formData:{
          type:Object,
          default:()=>{
            return JSON.parse(JSON.stringify(defaultSwiperData))
          }
        }
      },
      setup(props){
        const state = reactive({
          color1:'#409EFF',
          activeName:'content',
          dynamicValidateForm:{},
          locale:zhCn
        })

        const {formData} = toRefs(props)

        const imageUrl = ref('')

        const handleAvatarSuccess: UploadProps['onSuccess'] = (
            response,
            uploadFile
        ) => {
          imageUrl.value = URL.createObjectURL(uploadFile.raw!)
        }

        const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
          // if (rawFile.type !== 'image/jpeg') {
          //   ElMessage.error('Avatar picture must be JPG format!')
          //   return false
          // } else if (rawFile.size / 1024 / 1024 > 2) {
          //   ElMessage.error('Avatar picture size can not exceed 2MB!')
          //   return false
          // }
          return true
        }

        const handleClick = () =>{

        }

        const addInfo = () =>{
          formData.value.swiperConfig.list.push({
            img: "",
            info: [
              {
                key:"title"+Date.now(),
                title: "图片标题",
                value: "",
                tips: "请输入首页名称",
                max: 12
              },
              {
                key:"link"+Date.now(),
                title: "图片链接",
                value: "",
                tips: "请选择链接",
                max: 100
              },
              {
                key:"time"+Date.now(),
                title:'生效时间',
                value:[],
              }
            ]
          })
        }

        const changeImgConfig = (val) =>{
          formData.value.imgConfig.type = val
        }

        onMounted(()=>{
          console.log(props.formData)
        })

        return {
          imageUrl,
          formData,
          addInfo,
          handleAvatarSuccess,
          beforeAvatarUpload,
          handleClick,
          changeImgConfig,
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
          //margin-bottom: 28px;
          .handle{
            display: inline-block;
            margin:30px 10px 0px;
            cursor: move;
            img{
              width: 24px;
              height: 24px;
            }
          }
          .operation{
            width: 360px;
          }
        }
      }
      p{
        color: #5777ff;
        font-size: 14px;
        cursor: pointer;
      }
      &-form{
        :deep .el-form-item{
          align-items: center;
        }
      }
    }
</style>

<style scoped>
.avatar-uploader .avatar {
  width: 168px;
  height: 84px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 168px;
  height: 84px;
  text-align: center;
}
</style>
