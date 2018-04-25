<template>
    <div class="section">
        <project-sidebar-g></project-sidebar-g>
        <purchased-equipment-content></purchased-equipment-content>

    </div>
</template>

<script>
    import ProjectSidebarG from "./ProjectSidebarG"
    import PurchasedEquipmentContent from "../PurchasedEquipmentG/PurchasedEquipmentContent"
    export default {
        name: "PurchasedEquipmentSectionG",
        components:{
            ProjectSidebarG,
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