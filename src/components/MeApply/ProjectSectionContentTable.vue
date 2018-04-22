<template>
    <div>
        <essential-information></essential-information>
        <apply-for-expenditure></apply-for-expenditure>
    </div>
</template>

<script>
    import EssentialInformation from "./EssentialInformation";
    import ApplyForExpenditure from "./ApplyForExpenditure";
    export default {
        name: "ProjectSectionContentTable",
        components:{
            EssentialInformation,ApplyForExpenditure
        }
    }
</script>

<style scoped>
</style>