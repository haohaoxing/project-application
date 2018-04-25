<!--  -->
<template>
  <div class="section">
     <ProjectSidebar></ProjectSidebar>
      <procurement-progress-section-content></procurement-progress-section-content>
  </div>
</template>

<script>
import ProjectSidebar from "./ProjectSidebar.vue";
import ProcurementProgressSectionContent from "../ProcurementProgressP/ProProSecContent"
export default {
  data () {
    return {
    };
  },

  components: {
    ProjectSidebar,
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