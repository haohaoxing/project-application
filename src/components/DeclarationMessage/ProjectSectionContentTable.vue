<template>
    <div>
        <essential-information :list = "ApplyTabList"></essential-information>
        <apply-for-expenditure :list = "ApplyTabList"></apply-for-expenditure>
    </div>
</template>

<script>
    import EssentialInformation from "./EssentialInformation";
    import ApplyForExpenditure from "./ApplyForExpenditure";
    import ApplyApi from "../../apis/ApplyApi";
    export default {
        name: "ProjectSectionContentTable",
        components:{
            EssentialInformation,
            ApplyForExpenditure
        },
        data(){
            return {
                ApplyTabList:[]
            }
        },
         // 初始化组件获取数据
       created(){
           ApplyApi.getApplyList((data)=>{
                this.ApplyTabList = data;
            })
        }, 
       
        methods:{
        
        },
    }
</script>

<style scoped>
</style>