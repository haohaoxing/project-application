<!--  -->
<template>
 <!--顶部部分-->
    <div class="header">
        <div class="headerTop">
            <!--左侧logo-->
            <div class="logo"></div>
            <!--右侧按钮-->
            <div class="headerBtn"></div>
        </div>
         <project-nav></project-nav>
    </div>
</template>

<script>
//import ProjectHeader from "./ProjectHeader.vue";
import ProjectNav from "./ProjectNav.vue";
export default {
  data () {
    return {
    };
  },

  components: {
   //ProjectHeader,
   ProjectNav
  },

  methods: {}
}

</script>
<style scoped>
  @import url(../../assets/css/common.css);
</style>