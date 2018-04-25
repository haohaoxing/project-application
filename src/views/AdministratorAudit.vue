<template>
    <div>
        <project-header-nav></project-header-nav>
        <administrator-section></administrator-section>
    </div>
</template>

<script>
    import ProjectHeaderNav from "../components/commons/ProjectHeaderNav"
    import AdministratorSection from "../components/commons/AdministratorSection";
    export default {
        name: "Administratoraudit",
        components:{
            AdministratorSection,
            ProjectHeaderNav
        }
    }
</script>

<style scoped>

</style>