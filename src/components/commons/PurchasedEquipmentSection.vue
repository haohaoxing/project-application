<template>
    <div class="section">
        <project-sidebar></project-sidebar>
        <purchased-equipment-content></purchased-equipment-content>

    </div>
</template>

<script>
    import ProjectSidebar from "./ProjectSidebar"
    import PurchasedEquipmentContent from "../PurchasedEquipment/PurchasedEquipmentContent"
    export default {
        name: "PurchasedEquipmentSection",
        components:{
            ProjectSidebar,
            PurchasedEquipmentContent
        }

    }
</script>

<style scoped>
    .section {
        width: 100%;
        height: 100%;
        padding-top: 100px;
        padding-left: 170px;
        background: none;
        box-sizing: border-box;
        /*主体内容*/ }
</style>