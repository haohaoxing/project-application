<template>
        <div class="content">
            <!--用户信息-->
            <college-declarer></college-declarer>
            <!--项目搜索-->
            <purchased-equipment-project-search></purchased-equipment-project-search>
            <!--项目列表-->
            <purchased-equipment-apply-list :purchGList="purchasingGList"></purchased-equipment-apply-list>
        </div>
</template>

<script>
    import PurchasedEquipmentProjectSearch from "./PurchasedEquipmentProjectSearch"
    import PurchasedEquipmentApplyList from "./PurchasedEquipmentApplyList"
    import CollegeDeclarer from "../commons/CollegeDeclarer"
    import projectItemGApi from "../../apis/projectItemGApi";
/*    Vue.use(userTest)
    console.log(this.data)*/
    export default {

        name: "PurchasedEquipmentContent",

        components: {
            CollegeDeclarer,
            PurchasedEquipmentProjectSearch,
            PurchasedEquipmentApplyList
        },
        data(){
            return {
                purchasingGList:[]
            }
        },
        created(){
            projectItemGApi.getPurchasedEquipmentGList((data)=>{
                this.purchasingGList = data;
            })
        },

    }
</script>

<style scoped>

    .section .content {
        width: 99%;
        height: 100%;
        margin: 0 auto; }

</style>