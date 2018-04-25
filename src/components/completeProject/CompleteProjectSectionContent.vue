<template>
    <div class="content clear">
        <project-application-statistics-table></project-application-statistics-table>
         <project-charts></project-charts>
        <expenditure-charts></expenditure-charts>
    </div>
</template>

<script>
    import ProjectApplicationStatisticsTable from "./ProjectApplicationStatisticsTable";
    import ProjectCharts from "./ProjectCharts";
    import ExpenditureCharts from "./ExpenditureCharts";
    export default {
        name: "CompleteProjectContent",
        components: {
            ProjectApplicationStatisticsTable,
            ProjectCharts,
            ExpenditureCharts
        },
    }
</script>

<style scoped>
    .content{
        padding-left: 170px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
</style>