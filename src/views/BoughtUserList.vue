<template>
    <div>
        <project-header-nav></project-header-nav>
        <user-apply-section></user-apply-section>
    </div>
</template>

<script>
    import UserApplySection from "../components/commons/UserApplySection"
    import ProjectHeaderNav from "../components/commons/ProjectHeaderNav"
    export default {
        name: "BoughtUserList",
        components:{
            UserApplySection,
            ProjectHeaderNav
        }
    }
</script>

<style scoped>

</style>