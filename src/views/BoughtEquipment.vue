<template>
    <div>
        <project-header-nav></project-header-nav>
        <purchased-equipment-section></purchased-equipment-section>
    </div>

</template>

<script>
    import PurchasedEquipmentSection from "../components/commons/PurchasedEquipmentSection"
    import ProjectHeaderNav from "../components/commons/ProjectHeaderNav"
    export default {
        name: "BoughtEquipment",
        components:{
            PurchasedEquipmentSection,
            ProjectHeaderNav
        }
    }
</script>

<style scoped>

</style>