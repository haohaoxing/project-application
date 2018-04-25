<template>
    <div class="content">
        <college-declarer></college-declarer>
        <pro-pro-sec-con-table></pro-pro-sec-con-table>
    </div>
</template>

<script>
    import CollegeDeclarer from "../commons/CollegeDeclarer";
    import ProProSecConTable from "./ProProSecConTable"
    export default {
        name: "ProcurementProgressSectionContent",
        components:{
            CollegeDeclarer,
            ProProSecConTable
        }
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