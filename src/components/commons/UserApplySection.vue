<template>
    <div class="section">
        <project-sidebar></project-sidebar>
        <user-apply-content></user-apply-content>
    </div>
</template>

<script>
    import ProjectSidebar from "./ProjectSidebar"
    import UserApplyContent from "../UserApplyFor/UserApplyContent"
    export default {
        name: "UserApplySection",
        components:{
            UserApplyContent,
            ProjectSidebar
        }
    }
</script>

<style scoped>
    .section {
        width: 100%;
        height: 100%;
        padding-top: 100px;
        padding-left: 170px;
        background: none;
        box-sizing: border-box;
        /*主体内容*/ }
</style>