<!-- 静态主体内容 -->
<template>
  <div class="section">

     <project-sidebar-g></project-sidebar-g>
     <project-section-content></project-section-content>

  </div>
</template>

<script>
import ProjectSidebarG from "./ProjectSidebarG"
import ProjectSectionContent from "../DeclarationMessage/ProjectSectionContent"
export default {
  data () {
    return {
    };
  },

  components: {
    ProjectSidebarG,
    ProjectSectionContent
  },

  methods: {}
}

</script>
<style scoped>
.section {
    width: 100%;
    height: 100%;
    padding-left: 170px;
    padding-top: 100px;
    background: none;
    box-sizing: border-box;
    /*主体内容*/ }
</style>
