<!--  -->
<template>
  <div class="section">
     <project-sidebar-g></project-sidebar-g>
     <complete-project-content></complete-project-content>
  </div>
</template>

<script>
import ProjectSidebarG from "../commons/ProjectSidebarG";
import CompleteProjectContent from "./CompleteProjectSectionContent"
export default {
  data () {
    return {
    };
  },

  components: {
      ProjectSidebarG,
      CompleteProjectContent
  },

  methods: {

  }
}

</script>
<style scoped>
    .section{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: none;
        padding-top:100px;
        background: none;
    }
</style>