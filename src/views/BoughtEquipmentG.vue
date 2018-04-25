<template>
    <div>
        <project-header-nav></project-header-nav>
        <purchased-equipment-section-g></purchased-equipment-section-g>
    </div>

</template>

<script>
    import PurchasedEquipmentSectionG from "../components/commons/PurchasedEquipmentSectionG"
    import ProjectHeaderNav from "../components/commons/ProjectHeaderNav"
    export default {
        name: "BoughtEquipmentG",
        components:{
            PurchasedEquipmentSectionG,
            ProjectHeaderNav
        }
    }
</script>

<style scoped>

</style>