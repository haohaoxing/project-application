<template>
    <div class="content">
        <college-declarer></college-declarer>
        <administrator-search></administrator-search>
        <administrator-list :AdministratorItem="AdministratorList"></administrator-list>
    </div>
</template>

<script>
    import AdministratorList from "./AdministratorList"
    import AdministratorSearch from "./AdministratorSearch"
    import CollegeDeclarer from "../commons/CollegeDeclarer"
    import AdministratorApi from "../../apis/AdministratorApi"
    export default {
        name: "AdministratorContent",
        components:{
            AdministratorList,
            AdministratorSearch,
            CollegeDeclarer
        },
        data(){
            return {
                AdministratorList:[]
            }
        },
        created(){
            AdministratorApi.getAdministratorList((data)=>{
                this.AdministratorList = data;

            })
        }

    }
</script>

<style scoped>
    .section .content {
        width: 99%;
        height: 100%;
        margin: 0 auto; }

</style>