<template>
    <div class="section">
        <project-sidebar-g></project-sidebar-g>
        <administrator-content></administrator-content>
    </div>
</template>

<script>
    import ProjectSidebarG from "./ProjectSidebarG"
    import AdministratorContent from "../RightsOfAdministratorsApply/AdministratorContent";
    export default {
        name: "AdministratorSection",
        components:{
            AdministratorContent,
            ProjectSidebarG
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