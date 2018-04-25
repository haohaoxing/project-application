<!--  -->
<template>
 <!--顶部部分-->
    <div class="header">
         <project-header></project-header>
         <project-nav></project-nav>
    </div>
</template>

<script>
import ProjectHeader from "./ProjectHeader";
import ProjectNav from "./ProjectNav";
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

  /*头部公共样式*/
  .header{
      position:fixed;
      left:0;
      top:0;
      width:100%;
      z-index: 99999;
  }


</style>