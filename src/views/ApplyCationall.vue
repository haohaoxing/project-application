<!-- 整体 -->
<template>
 <div>
   <project-header-nav></project-header-nav>
   <project-section></project-section>
 </div>
</template>

<script>
import ApplyApi from "../apis/ApplyApi";
import ProjectHeaderNav from "../components/commons/ProjectHeaderNav"
import ProjectSection from "../components/commons/ProjectSection"


export default {
  name:"ApplyCationall",
  data (){
      return {
          ApplyTabList:[]
      }
  },
  
      // 初始化组件获取数据
       created(){
            this.__initData();
        },
        methods:{
            __initData(){
                ApplyApi.getApplyList((data)=>{
                this.ApplyTabList = data;
            })

            }
        },
 
   components:{
     ProjectHeaderNav,
     ProjectSection

    }
}

</script>
<style  scoped>
</style>