<!--  -->
<template>
  <div class="section">

     <ProjectSidebar></ProjectSidebar>
     <project-section-content></project-section-content>

  </div>
</template>

<script>
import ProjectSidebar from "./ProjectSidebar"
import ProjectSectionContent from "../MeApply/ProjectSectionContent"
export default {
  data () {
    return {
    };
  },

  components: {
    ProjectSidebar,
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