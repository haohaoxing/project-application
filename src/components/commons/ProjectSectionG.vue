<!--  -->
<template>
  <div class="section">
     <project-sidebar-g></project-sidebar-g>
      <procurement-progress-section-content></procurement-progress-section-content>
  </div>
</template>

<script>
import ProjectSidebarG from "../../components/commons/ProjectSidebarG"
import ProcurementProgressSectionContent from "../ProcurementProgressG/ProProSecContent"
export default {
  data () {
    return {
    };
  },

  components: {
      ProjectSidebarG,
      ProcurementProgressSectionContent
  },

  methods: {

  }
}

</script>
<style scoped>
    .section{
        width: 100%;
        padding-top:100px;
        background: none;
    }
</style>