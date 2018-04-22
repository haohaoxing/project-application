<template>
    <div class="content">
        <college-declarer></college-declarer>
       <project-section-content-table></project-section-content-table>
    </div>
    
</template>

<script>
    import CollegeDeclarer from "../commons/CollegeDeclarer";
    import ProjectSectionContentTable from  "./ProjectSectionContentTable";
    export default {
        name: "ProjectSectionContent",
        components:{
            CollegeDeclarer,
            ProjectSectionContentTable
        }
    }
</script>

<style scoped>
    .content{
       
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
</style>