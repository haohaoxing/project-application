<template>
    <div class="content">
        <college-declarer></college-declarer>
        <user-apply-search></user-apply-search>
        <user-apply-list :UserApplyItem="UserApplyList"></user-apply-list>
    </div>
</template>

<script>
    import UserApplyList from "./UserApplyList"
    import UserApplySearch from "./UserApplySearch"
    import CollegeDeclarer from "../commons/CollegeDeclarer"
    import UserApplyApi from "../../apis/UserApplyList"
    export default {
        name: "UserApplyContent",
        components:{
            UserApplyList,
            UserApplySearch,
            CollegeDeclarer
        },
        data(){
            return {
                UserApplyList:[]
            }
        },
        created(){
            UserApplyApi.getUserApplyList((data)=>{
                this.UserApplyList = data;
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