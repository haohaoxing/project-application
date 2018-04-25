<template>
    <div>
        <project-header-nav></project-header-nav>
        <project-section></project-section>
    </div>
</template>

<script>
    import ProjectHeaderNav from "../components/commons/ProjectHeaderNav";
    import  ProjectSection from "../components/completeProject/CompleteProjectSection";
    export default {
        name: "CompleteProject",
        components:{
            ProjectHeaderNav,
            ProjectSection
        }
    }
</script>

<style scoped>

</style>