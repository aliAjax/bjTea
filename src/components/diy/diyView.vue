<template>
  <div class="diyView">
    <draggable
        class="dragArea"
        v-model="list"
        group="people"
        @change="log"
        item-key="id"
    >
      <template #item="{ element }">
        <div class="list-group-item">
          {{ element.name }}
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
  data() {
    return {
      list: [
        { name: "dog 1", id: 1 },
        { name: "dog 2", id: 2 },
        { name: "dog 3", id: 3 },
        { name: "dog 4", id: 4 }
      ]
    };
  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
    }
  },
  setup(){
    const state = reactive({
      mConfig:['123']
    })

    const change = () =>{

    }

    const onMove = () =>{

    }

    return {
      change,
      onMove,
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
    }
  }
}
</style>