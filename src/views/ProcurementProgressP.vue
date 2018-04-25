<template>
    <div>
        <project-header-nav></project-header-nav>
        <project-section-p></project-section-p>
    </div>
</template>

<script>
    import ProjectHeaderNav from "../components/commons/ProjectHeaderNav";
    import  ProjectSectionP from "../components/commons/ProjectSectionP";

    export default {
        name: "ProcurementProgressP",
        components:{
            ProjectHeaderNav,
            ProjectSectionP
        },

        methods:{

        }

    }
</script>

<style scoped>

</style>