<!--  -->
<template>
  <div>
      <project-header-nav></project-header-nav>
      <project-section></project-section>
  </div>
</template>

<script>
import ProjectHeaderNav from "./commons/ProjectHeaderNav.vue";
import ProjectSection from "./commons/ProjectSection.vue";
export default {
  data () {
    return {
    };
  },

  components: {
      ProjectHeaderNav,
      ProjectSection
  },

  methods: {}
}

</script>
<style scoped>
</style>