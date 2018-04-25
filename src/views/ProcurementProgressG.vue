<template>
    <div>
        <project-header-nav></project-header-nav>
        <project-section-g></project-section-g>
    </div>
</template>

<script>
    import ProjectHeaderNav from "../components/commons/ProjectHeaderNav";
    import  ProjectSectionG from "../components/commons/ProjectSectionG";

    export default {
        name: "ProcurementProgressG",
        components:{
            ProjectHeaderNav,
            ProjectSectionG
        },

        methods:{

        }

    }
</script>

<style scoped>

</style>