<!--  -->
<template>
<div>
  <project-header-nav></project-header-nav>
  <declaration-section></declaration-section>
</div>
  
</template>

<script>
import ProjectHeaderNav from "../components/commons/ProjectHeaderNav"
import DeclarationSection from "../components/commons/DeclarationSection"


export default {
      name:"DeclrationTab",
    

  components: {
      ProjectHeaderNav,
      DeclarationSection


  },

 
}

</script>
<style scoped>
</style>