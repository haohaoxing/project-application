<!--  -->
<template>
 <!--顶部部分-->
    <div class="header">
        <project-header></project-header>
         <project-nav></project-nav>
    </div>
</template>

<script>
import ProjectHeader from "./ProjectHeader.vue";
import ProjectNav from "./ProjectNav.vue";
export default {
  data () {
    return {
    };
  },

  components: {
   ProjectHeader,
   ProjectNav
  },

  methods: {}
}

</script>
<style scoped>
  
  
</style>